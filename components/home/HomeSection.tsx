import {
  Box,
  Button,
  Flex,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FaRegPlayCircle } from "react-icons/fa";

function HomeSection() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      position="relative"
      justify="center"
      alignItems="center"
      color="white"
      w="100%"
      minH="94vh"
    >
      <Box position="absolute" zIndex="-1" w="100%" minH="94vh">
        <video
          src="/doodles-bg.mp4"
          style={{ width: "100%", height: "94vh", objectFit: "cover" }}
          autoPlay
          muted
          loop
        ></video>
      </Box>
      <Flex
        direction="column"
        alignItems="center"
        justify="space-between"
        h="70vh"
      >
        <Flex direction="column" gap={6} alignItems="center">
          <Image
            src="/doodles2-logo.png"
            w={["70%", "70%", "60%", "40%", "40%"]}
            alt=""
          />
          <Image
            src="/coming-soon.png"
            w={["40%", "40%", "20%", "15%", "15%"]}
            alt=""
          />
        </Flex>
        <Button
          onClick={onOpen}
          border="2px"
          borderBottomWidth="4px"
          color="#6681c5"
          borderColor="#6681c5"
          px={8}
          py={6}
          borderRadius="xl"
        >
          <Flex gap={2} alignItems="center">
            <FaRegPlayCircle size={18} />
            <Box fontSize="lg">watch trailer</Box>
          </Flex>
        </Button>
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent height="30rem">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/sv9TaQ5z9jw?playlist=sv9TaQ5z9jw&loop=1&autoplay=1&mute=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </ModalContent>
        </Modal>
      </Flex>
    </Flex>
  );
}

export default HomeSection;
