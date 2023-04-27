import { HStack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import BitcoinIcon from './bitcoin-icon';

export default function Footer() {
  return (
    <HStack
      w="100%"
      maxW={1200}
      justifyContent="space-between"
    >
      <HStack fontWeight={900}>
        <Link to="/">Home</Link>
      </HStack>
      <Text
        as="i"
        fontSize={['md', 'lg']}
        color={'gray.400'}
        fontWeight={900}
      >
        "News on the Ledger of Record." <BitcoinIcon color="#F7931A"></BitcoinIcon>
      </Text>
    </HStack>
  );
}
