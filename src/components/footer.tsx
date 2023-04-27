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
      width="100%"
      maxW="1200px"
    >
      <Heading pt={6}>
        News on the ledger of record <BitcoinIcon color="#F7931A"></BitcoinIcon>
      </Heading>
      <Stack direction={['column', 'column', 'row']}>
        <Link to="/">1btc.news home</Link>
        <Divider
          orientation="vertical"
          hideBelow="sm"
        />
        <Divider
          hideAbove="sm"
          orientation="vertical"
        />
        <ChakraLink
          isExternal
          href="https://docs.inscribe.news"
        >
          inscribe the news
        </ChakraLink>
      </Stack>
    </VStack>
  );
}
