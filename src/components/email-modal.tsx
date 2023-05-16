import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import SignupForm from './signup-form';

export default function EmailModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        size={['md', 'md', 'lg']}
        onClick={onOpen}
        w={['100%', 'auto']}
        maxW="240px"
      >
        Join waitlist
      </Button>
      <Modal
        allowPinchZoom
        autoFocus
        onClose={onClose}
        isOpen={isOpen}
        size="xl"
        scrollBehavior="inside"
        isCentered
      >
        <ModalOverlay
          bg="blackAlpha.200"
          backdropFilter="blur(2px)"
        />
        <ModalContent bgColor="var(--1btc-news-colors-brand-darkgray)">
          <ModalCloseButton />
          <ModalBody
            textAlign="center"
            pt={16}
            pb={12}
          >
            <Box
              mb={3}
              lineHeight={1}
            >
              <Text
                fontWeight="bold"
                fontSize={['2xl', '2xl', '4xl']}
                display={{ base: 'inline', sm: 'block' }}
              >
                Be first to access
              </Text>
              <Text
                fontWeight="bold"
                fontSize={['2xl', '2xl', '4xl']}
                display={{ base: 'inline', sm: 'block' }}
              >
                {' '}
                upcoming 1btc products
              </Text>
            </Box>
            <Text
              mb={6}
              fontSize={['sm', 'md', 'lg']}
            >
              By subscribing, you'll also get top news from the feed sent directly to your inbox,
              weekly.
            </Text>
            <SignupForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
