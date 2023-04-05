import { Box, Heading, Text } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../components/footer';

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
      <Heading
        as="h1"
        size="3xl"
      >
        404 - not found!
      </Heading>
      <Text>We couldn't find that page.</Text>
      <br />
      <Text>
        Please try a different page or <Link to="/">click this link to return home.</Link>
      </Text>
      <br />
      <Text>Current location: {location.pathname}</Text>
    </Box>
  );
}
