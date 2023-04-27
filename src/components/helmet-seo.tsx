import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export default function HelmetSeo(props: SeoProps) {
  const title = `${props.title} | 1btc.news` ?? '1btc.news';
  const description = props.description ?? 'News on the Ledger of Record.';
  const image = props.image ?? 'https://client-2zi.pages.dev/logos/1btc-news-orange.png';
  const url = props.url ?? 'https://client-2zi.pages.dev/';

  return (
    <Helmet>
      <title>{title}</title>
      <meta
        itemProp="name"
        content={title}
      />
      <meta
        name="description"
        content={description}
      />
      <meta
        itemProp="description"
        content={description}
      />
      <meta
        itemProp="image"
        content={image}
      />
      <meta
        property="og:url"
        content={url}
      />
      <meta
        property="og:type"
        content="website"
      />
      <meta
        property="og:title"
        content={title}
      />
      <meta
        property="og:description"
        content={description}
      />
      <meta
        property="og:image"
        content={image}
      />
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:title"
        content={title}
      />
      <meta
        name="twitter:description"
        content={description}
      />
      <meta
        name="twitter:image"
        content={image}
      />
    </Helmet>
  );
}
