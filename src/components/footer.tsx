import {
  HStack,
  Link as ChakraLink,
  Text,
  Icon,
  VStack,
  Heading,
  Stack,
  Divider,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import BitcoinIcon from './bitcoin-icon';

export default function Footer() {
  return (
    <VStack
      fontWeight={900}
      alignItems="start"
    >
      <Heading pt={6}>
        News on the Ledger of Record <BitcoinIcon color="#F7931A"></BitcoinIcon>
      </Heading>
      <Stack direction={['column', 'column', 'row']}>
        <Link to="/">1btc.news Home</Link>
        <Divider
          orientation="vertical"
          hideBelow="sm"
        />
        <ChakraLink
          isExternal
          href="https://github.com/1btc-news/client"
        >
          1btc.news GitHub
        </ChakraLink>
        <Divider
          orientation="vertical"
          hideBelow="sm"
        />
        <ChakraLink
          isExternal
          href="https://docs.inscribe.news"
        >
          Ordinal News Standard
        </ChakraLink>
        <Divider
          orientation="vertical"
          hideBelow="sm"
        />
        <ChakraLink
          isExternal
          href="https://inscribe.news/post-news"
        >
          Inscribe the News
        </ChakraLink>
      </Stack>
    </VStack>
  );
}
