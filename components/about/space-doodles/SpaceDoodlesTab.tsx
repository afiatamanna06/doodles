import { Box, Button, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";

function SpaceDoodlesTab() {
  return (
    <Flex
      display={["none", "none", "flex", "none", "none"]}
      color="white"
      direction="column"
      bgImage="url('/bg_space-rounded-planet.png')"
      bgSize={["cover"]}
      px="8"
      pt="12"
      pb="20"
      bgPosition="right"
      borderRadius="2xl"
      bgRepeat="no-repeat"
      w="full"
      justify="start"
      alignItems={["start"]}
    >
      <Flex gap={4} h="10rem" w="60%">
        <Image src="/doodle_plane.gif" w="60%" h="80%" alt="" />
        <Image src="/space_doodles_logo_new.png" w="60%" h="80%" alt="" />
      </Flex>
      <Flex direction="column" alignItems="center" gap={6}>
        <Box fontSize={["2xl"]} textShadow="1px 2px 0px #80b1ff">
          Space Doodles is the first, small step towards discovering the Doodle
          universe with dozens of spacecraft designed by Burnt Toast.
        </Box>
        <Box fontSize="xl">
          All Original Doodles receive a free ship and can launch it into space
          where it will sync with its pilot and establish attributes like
          “bladder management”, “piloting ability”, and more.
        </Box>
        <Box>
          <Link
            href="https://opensea.io/collection/space-doodles-official"
            target="_blank"
            passHref
          >
            <Button
              borderColor="#a4a4f4"
              px={8}
              bg="white"
              borderBottomWidth="2px"
              color="#6b6b9f"
              borderRadius="lg"
              _hover={{ opacity: ".85" }}
              _active={{ opacity: ".85" }}
              _focus={{ opacity: ".85" }}
            >
              <Box fontSize="lg">browse space doodles</Box>
            </Button>
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
}

export default SpaceDoodlesTab;
