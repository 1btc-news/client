import {
  Box,
  Button,
  Collapse,
  Container,
  Divider,
  Heading,
  Link as ChakraLink,
  SimpleGrid,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { InscriptionMeta, OrdinalNews } from '../../lib/api-types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import StatsCard from '../components/stats-card';
import { countWordsAndEstimateReadingTime } from '../helpers';

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

async function getInscriptionData(
  id: string
): Promise<(InscriptionMeta & OrdinalNews) | undefined> {
  const url = new URL('https://inscribe.news/');
  const info = await fetch(new URL(`/api/info/${id}`, url).toString());
  const content = await fetch(new URL(`/api/content/${id}`, url).toString());
  if (info.ok && content.ok) {
    const infoData = await info.json();
    const contentData = await content.json();
    return {
      ...infoData,
      ...contentData,
    };
  }
  console.log(`getInscriptionData err: ${info.status} ${content.status}`);
  return undefined;
}

interface NewsStats {
  wordCount: number;
  readingTime: number;
}

export default function ViewNews() {
  const query = useQuery();
  const id = query.get('id');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<(InscriptionMeta & OrdinalNews) | undefined>(undefined);
  const [news, setNews] = useState<OrdinalNews | undefined>(undefined);
  const [stats, setStats] = useState<NewsStats | undefined>(undefined);

  useEffect(() => {
    if (id) {
      getInscriptionData(id).then(data => {
        setLoading(false);
        if (data === undefined) return;
        setData(data);
        // extract news values as InscriptionMeta
        const { p, op, title, url, body, author, authorAddress, signature } = data;
        // TODO: fix for SNS names coming up in view-news
        if (p === 'ons' && title) {
          setNews({
            p,
            op,
            title,
            url,
            body,
            author,
            authorAddress,
            signature,
          });
        }
      });
    }
  }, [id]);

  useEffect(() => {
    if (news && news.body) {
      setStats(countWordsAndEstimateReadingTime(news.body));
    }
  }, [news]);

  if (!id) {
    return (
      <Container>
        <Heading>No Inscription ID</Heading>
        <Text>Unable to load news inscription.</Text>
        <Text>Please provide the ID as a query parameter, or</Text>
        <Link to="/">Click this link to return home.</Link>
      </Container>
    );
  }

  if (loading) {
    return (
      <Container>
        <Heading>Loading inscription data...</Heading>
        <Text>ID: {id}</Text>
      </Container>
    );
  }

  if (!data || !news) {
    return (
      <Container>
        <Heading>Unable to Load</Heading>
        <Text>Unable to load news inscription.</Text>
        <Text>ID: {id}</Text>
        <Link to="/">Click this link to return home.</Link>
      </Container>
    );
  }

  return (
    <Container
      display="flex"
      flexDir="column"
      textAlign="left"
      minH="100vh"
      maxW="800px"
      py={8}
    >
      {news.author && <Text pb={3}>{news.author}</Text>}
      <Heading
        as="h1"
        lineHeight={1}
        pb={3}
        className="ord-news-title"
      >
        {news.url ? (
          <ChakraLink
            href={news.url}
            isExternal
          >
            {news.title}
          </ChakraLink>
        ) : (
          news.title
        )}
      </Heading>
      <Text>
        {new Date(data.timestamp).toLocaleDateString()}
        {stats &&
          ` • ${stats.wordCount.toLocaleString()} words • ${stats.readingTime.toLocaleString()} min read`}
      </Text>
      {news.body && (
        <>
          <Divider
            orientation="horizontal"
            my={3}
            style={{ background: 'var(--1btc-news-colors-whiteAlpha-500)' }}
          />
          <ReactMarkdown
            components={ChakraUIRenderer()}
            children={news.body}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            linkTarget="_blank"
            className="ord-news-body"
          ></ReactMarkdown>
        </>
      )}
    </Container>
  );
}
