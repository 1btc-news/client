import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Stack,
  StackDirection,
  Text,
  useControllableState,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function SignupForm({ dir = 'col' }) {
  // responsive styling
  let direction: StackDirection;
  switch (dir) {
    case 'col':
    case 'column':
      direction = 'column';
      break;
    case 'row':
      direction = 'row';
      break;
    default:
      direction = 'column';
  }

  // simple email validator
  function validateEmail(email: string) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  // form fields
  const [email, setEmail] = useControllableState({ defaultValue: '' });
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const [formState, setFormState] = useState({
    isSubmitted: false,
    isError: false,
  });

  // form submission handler
  const handleSubmit = () => {
    console.log('provided email:', email);

    if (!validateEmail(email)) {
      setIsInvalidEmail(true);
      return;
    }

    const formData = new FormData();

    // add hidden fields from AC form
    formData.append('u', '1');
    formData.append('f', '1');
    formData.append('s', '');
    formData.append('c', '0');
    formData.append('m', '0');
    formData.append('act', 'sub');
    formData.append('v', '2');
    formData.append('or', '241ed61e1bd9eff2e2c3a3c1165a938e');

    // add email to form data
    formData.append('email', email);

    // submit form
    fetch('https://doubleup.activehosted.com/proc.php', {
      method: 'POST',
      body: formData,
      mode: 'no-cors',
    })
      .then(() => setFormState({ isSubmitted: true, isError: false }))
      .catch(err => {
        console.log(err);
        setFormState({ isSubmitted: true, isError: true });
      });
  };

  if (formState.isSubmitted) {
    if (formState.isError) {
      return <Text>Error, please refresh.</Text>;
    }
    return <Text>Thank you for signing up!</Text>;
  }

  return (
    <Stack
      spacing={4}
      direction={direction}
      w="100%"
      maxW="600px"
      m="0 auto"
    >
      <FormControl
        id="email"
        isRequired
        isInvalid={isInvalidEmail}
      >
        <Input
          type="text"
          placeholder="Enter your email"
          fontSize={['md', 'xl']}
          py={6}
          onChange={e => setEmail(e.target.value)}
        />
        <FormErrorMessage>Please provide a valid email.</FormErrorMessage>
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
          onClick={handleSubmit}
        >
          Join Waitlist
        </Button>
      </Stack>
    </Stack>
  );
}
