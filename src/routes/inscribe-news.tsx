import { Badge, Container, Flex, Heading } from '@chakra-ui/react';
import HelmetSeo from '../components/helmet-seo';
import Footer from '../components/footer';
import EmailModal from '../components/email-modal';

export default function InscribeNews() {
  return (
    <PageWrapper>
      <PageHeader />
      <CreateNews />
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
          <Badge ms={3}>raw feed</Badge>
        </Flex>
        <EmailModal />
      </Flex>
    </>
  );
}

// step 1 - form to create the news
function CreateNews() {
  return (
    <div>
      <h1>Step 1 - Create the News</h1>
    </div>
  );
}

// step 2 - preview and address info
function PreviewNews() {
  return (
    <div>
      <h1>Step 2 - Preview and Settings</h1>
    </div>
  );
}

// step 3 - view status by given ID
function ViewStatus() {
  return (
    <div>
      <h1>Step 3 - View Inscription Status</h1>
    </div>
  );
}
