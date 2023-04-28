import { Link as ChakraLink, VStack, Heading, Stack, Divider } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import BitcoinIcon from './bitcoin-icon';

export default function Footer() {
  const location = useLocation();

  return (
    <VStack
      fontWeight={900}
      alignItems="start"
      width="100%"
      maxW="1200px"
    >
      <Heading pt={6}>
        News on the ledger of record. <BitcoinIcon color="#F7931A"></BitcoinIcon>
      </Heading>
      <Stack direction={['column', 'column', 'row']}>
        {location.pathname !== '/' && (
          <>
            <Link to="/">1btc.news home</Link>
            <Divider
              orientation="vertical"
              hideBelow="sm"
            />
          </>
        )}
        <ChakraLink
          isExternal
          href="https://inscribe.news"
        >
          Inscribe News
        </ChakraLink>
      </Stack>
    </VStack>
  );
}
