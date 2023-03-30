import { Box, Heading, Text, Button, Stack, FormControl, Input } from '@chakra-ui/react';

export default function RootIndex() {
  return (
    <Box
      display="flex"
      flexDir="column"
      w="100%"
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
        >
          "All the News That's Fit To Inscribe."
        </Text>
      </Stack>

      <Stack
        spacing={4}
        w="100%"
        maxW="600px"
        m="0 auto"
      >
        <FormControl
          id="title"
          isRequired
        >
          <Input
            type="text"
            placeholder="Enter your email"
            fontSize={['md', 'xl']}
          />
        </FormControl>
        <Stack
          spacing={10}
          pt={2}
        >
          <Button
            loadingText="Submitting"
            size="lg"
            borderRadius="xl"
            variant="1btc-news-button"
          >
            Join Waitlist
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
