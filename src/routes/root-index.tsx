import { Box, Heading, Text, Button, Stack, FormControl, Input } from '@chakra-ui/react';
import SignupForm from '../components/signup-form';

export default function RootIndex() {
  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      w="100%"
      minH="100vh"
      py={8}
      px={4}
    >
      <Stack
        w="100%"
        maxW="600px"
        m="0 auto"
        mb={8}
      >
        <Heading fontSize={['4xl', '6xl']}>1btc.news</Heading>
        <Text
          as="i"
          fontSize={['md', 'xl']}
          color={'gray.400'}
          fontWeight={900}
        >
          "All the News That's Fit To Inscribe."
        </Text>
      </Stack>

      <SignupForm />
    </Box>
  );
}
