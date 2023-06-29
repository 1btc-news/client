import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link as ChakraLink,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatGroup,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Text,
  Textarea,
  useControllableState,
  useSteps,
} from '@chakra-ui/react';
import HelmetSeo from '../components/helmet-seo';
import Footer from '../components/footer';
import EmailModal from '../components/email-modal';

export default function InscribeNews() {
  const steps = [
    { title: 'Create News', description: 'Create the news to inscribe.' },
    { title: 'Preview News', description: 'Preview the news and set address info.' },
    { title: 'View Status', description: 'View the status of the inscribed news.' },
  ];

  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  return (
    <PageWrapper>
      <PageHeader />
      <Stepper
        my={8}
        size="lg"
        index={activeStep}
        colorScheme="orange"
      >
        {steps.map((step, index) => (
          <Step
            key={index}
            onClick={() => setActiveStep(index)}
          >
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
      {activeStep === 0 && <CreateNews />}
      {activeStep === 1 && <PreviewNews />}
      {activeStep === 2 && <ViewStatus />}
      <Footer />
    </PageWrapper>
  );
}

// page wrapper - to be extracted into a component

type WrapperProps = {
  children: React.ReactNode;
};

function PageWrapper({ children }: WrapperProps) {
  return (
    <Container
      display="flex"
      flexDir="column"
      textAlign="left"
      minH="100vh"
      maxW="1200px"
      py={8}
      px={4}
    >
      {children}
    </Container>
  );
}

// page header - to be extracted into a component
// EmailModal contains Button and SignupForm

function PageHeader() {
  return (
    <>
      <HelmetSeo title="Inscribe News" />
      <Flex
        alignItems={['flex-start', 'center']}
        justifyContent="space-between"
        w="100%"
        maxW={1200}
        pb={6}
        direction={['column', 'row']}
      >
        <Flex
          alignItems="flex-start"
          w={['100%', 'auto']}
        >
          <Heading
            as="h1"
            size={['2xl', '3xl']}
            mb={[6, 0]}
          >
            1btc.news
          </Heading>
        </Flex>
        <EmailModal />
      </Flex>
    </>
  );
}

// step 1 - form to create the news
function CreateNews() {
  const [title, setTitle] = useControllableState({ defaultValue: '' });
  const [url, setUrl] = useControllableState({ defaultValue: '' });
  const [body, setBody] = useControllableState({ defaultValue: '' });
  const [author, setAuthor] = useControllableState({ defaultValue: '' });
  const [finalPost, setFinalPost] = useControllableState({ defaultValue: '' });

  const generatePost = () => {
    /*
    if (title.length === 0) {
      toast({
        title: 'Title is required',
        status: 'error',
        duration: 3000,
        isClosable: true,
        variant: 'left-accent',
      });
      return;
    }

    if (url.length === 0 && body.length === 0) {
      toast({
        title: 'One of a URL or Body is required',
        status: 'error',
        duration: 3000,
        isClosable: true,
        variant: 'left-accent',
      });
      return;
    }
    */

    const postObject = {
      p: 'ons',
      op: 'post',
      title,
      ...(url.length > 0 && { url }),
      ...(author.length > 0 && { author }),
      ...(body.length > 0 && { body }),
    };

    setFinalPost(JSON.stringify(postObject, null, 2));
  };

  return (
    <Stack spacing={4}>
      <Heading size="lg">Create the News</Heading>
      <FormControl
        id="title"
        isRequired
      >
        <FormLabel fontSize={['sm', 'sm', 'xl']}>Title</FormLabel>
        <Input
          type="text"
          placeholder="The main headline"
          fontSize={['xs', 'sm', 'xl']}
          onChange={e => setTitle(e.target.value.trim())}
        />
      </FormControl>
      <FormControl id="url">
        <FormLabel fontSize={['sm', 'sm', 'xl']}>URL</FormLabel>
        <Input
          type="url"
          placeholder="Add a link (optional)"
          fontSize={['xs', 'sm', 'xl']}
          onChange={e => setUrl(e.target.value.trim())}
        />
      </FormControl>
      <FormControl id="author">
        <FormLabel fontSize={['sm', 'sm', 'xl']}>Author</FormLabel>
        <Input
          type="text"
          placeholder="Add an author (optional)"
          fontSize={['xs', 'sm', 'xl']}
          onChange={e => setAuthor(e.target.value.trim())}
        />
      </FormControl>
      <FormControl>
        <FormLabel fontSize={['sm', 'sm', 'xl']}>Body</FormLabel>
        <Textarea
          resize="vertical"
          placeholder="Plain text or markdown (optional)"
          fontSize={['xs', 'sm', 'xl']}
          onChange={e => setBody(e.target.value.trim())}
        />
      </FormControl>
      <Stack
        spacing={10}
        pt={2}
      >
        <Button
          loadingText="Submitting"
          size="lg"
          onClick={generatePost}
          borderRadius="xl"
        >
          Preview Inscription
        </Button>
      </Stack>
    </Stack>
  );
}

// step 2 - preview and address info
function PreviewNews() {
  return (
    <Stack spacing={4}>
      <Heading size="lg">Preview and Settings</Heading>
      <ChakraLink
        isExternal
        href="https://inscribe.news"
      >
        Preview Link to Article
      </ChakraLink>
      <FormControl
        id="title"
        isRequired
      >
        <FormLabel fontSize={['sm', 'sm', 'xl']}>Select Fee</FormLabel>
        <StatGroup>
          <Stat>
            <StatLabel>Economy</StatLabel>
            <StatNumber>30</StatNumber>
            <StatHelpText>sats/vb</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Normal</StatLabel>
            <StatNumber>40</StatNumber>
            <StatHelpText>sats/vb</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>High</StatLabel>
            <StatNumber>50</StatNumber>
            <StatHelpText>sats/vb</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Custom</StatLabel>
            <StatNumber>?</StatNumber>
            <StatHelpText>sats/vb</StatHelpText>
          </Stat>
        </StatGroup>
      </FormControl>
      <FormControl id="receive_address">
        <FormLabel fontSize={['sm', 'sm', 'xl']}>Receive Address</FormLabel>
        <Input
          type="url"
          placeholder="Address to send the inscription"
          fontSize={['xs', 'sm', 'xl']}
        />
      </FormControl>
      <FormControl id="refund_address">
        <FormLabel fontSize={['sm', 'sm', 'xl']}>Refund Address</FormLabel>
        <Input
          type="text"
          placeholder="Address for refund (optional)"
          fontSize={['xs', 'sm', 'xl']}
        />
      </FormControl>
      <FormControl id="email_address">
        <FormLabel fontSize={['sm', 'sm', 'xl']}>Email Address</FormLabel>
        <Input
          type="text"
          placeholder="Email address to track order (optional)"
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
          Inscribe News
        </Button>
      </Stack>
    </Stack>
  );
}

// step 3 - view status by given ID
function ViewStatus() {
  return (
    <>
      <Heading size="lg">View Submission Status</Heading>
      <Text>TODO a.k.a WIP</Text>
    </>
  );
}
