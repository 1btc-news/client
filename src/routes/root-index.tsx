import { Box, Heading, Text, Button, Stack, FormControl, Input } from '@chakra-ui/react';

export default function RootIndex() {
  return (
    <Box
      borderRadius="xl"
      display="flex"
      flexDir="column"
      w="100%"
    >
      <Stack
        align={'center'}
        mb={8}
      >
        <Heading
          fontSize={'4xl'}
          textAlign={'center'}
        >
          1btc.news
        </Heading>
        <Text
          fontSize={'lg'}
          color={'gray.600'}
        >
          All the news that's fit to inscribe.
        </Text>
      </Stack>

      <Stack spacing={4}>
        <FormControl
          id="title"
          isRequired
        >
          <Input
            type="text"
            placeholder="Enter your email"
            fontSize={['xs', 'sm', 'xl']}
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
          >
            Join Waitlist
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
