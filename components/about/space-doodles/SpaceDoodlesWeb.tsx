import { Box, Button, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";

function SpaceDoodlesWeb() {
  return (
    <Flex
      display={["none", "none", "none", "flex", "flex"]}
      maxW="74rem"
      color="white"
      direction="column"
      bgImage="url('/bg_space-rounded-planet.png')"
      bgSize={["cover"]}
      p="20"
      gap={16}
      bgPosition="right"
      borderRadius="2xl"
      bgRepeat="no-repeat"
      w="full"
      alignItems={["start"]}
    >
      <Flex gap={10}>
        <Image src="/space_doodles_logo_new.png" w="20%" h="65%" alt="" />
        <Flex direction="column" gap={6}>
          <Box
            fontSize={["xl", "xl", "xl", "2xl"]}
            textShadow="1px 2px 0px #80b1ff"
          >
            Space Doodles is the first, small step towards discovering the
            Doodle universe with dozens of spacecraft designed by Burnt Toast.
          </Box>
          <Box fontSize="lg">
            All Original Doodles receive a free ship and can launch it into
            space where it will sync with its pilot and establish attributes
            like “bladder management”, “piloting ability”, and more.
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
      <Image src="/doodle_plane.gif" w="25%" alt="" />
    </Flex>
  );
}

export default SpaceDoodlesWeb;
