import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';

export default function Root404() {
  const location = useLocation();
  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      textAlign="left"
      w="100%"
      minH="100vh"
      py={8}
      px={4}
    >
      <Image
        src="/logos/1btc-news-black.svg"
        boxSize="250px"
      />
      <Heading
        as="h1"
        size="3xl"
        pb={4}
      >
        404 - not found!
      </Heading>
      <Text fontSize="xl">We couldn't find that page.</Text>
      <br />
      <Text
        fontSize="xl"
        as="b"
      >
        Current location: {location.pathname}
      </Text>
      <br />
      <Text fontSize="xl">
        Please try a different page or <Link to="/">click this link to return home.</Link>
      </Text>
    </Box>
  );
}
