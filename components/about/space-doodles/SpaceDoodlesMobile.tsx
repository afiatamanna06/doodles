import { Flex, Image, Box, Button } from "@chakra-ui/react";
import Link from "next/link";

function SpaceDoodlesMobile() {
  return (
    <Flex
      display={["flex", "flex", "none", "none", "none"]}
      direction="column"
      w="full"
      alignItems="start"
      color="white"
      bgImage="url('/bg_space-rounded-mobile.png')"
      bgSize={["cover"]}
      px="6"
      pt="10"
      pb="40"
      gap={12}
      position="relative"
      bgPosition="center"
      borderRadius="2xl"
      bgRepeat="no-repeat"
    >
      <Flex gap={10} direction="column" alignItems="center" position="relative" zIndex={3}>
        <Image src="/space_doodles_logo_new.png" w="60%" h="65%" alt="" />
        <Flex direction="column" gap={6} alignItems="center">
          <Box
            fontSize={["2xl", "2xl", "2xl", "2xl"]}
            textShadow="1px 2px 0px #80b1ff"
          >
            Space Doodles is the first, small step towards discovering the
            Doodle universe with dozens of spacecraft designed by Burnt Toast.
          </Box>
          <Box fontSize="xl">
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
      <Image src="/doodle_plane.gif" w="70%" position="relative" zIndex={3} alt="" />
      <Image src="/space_planet-clouds.png" w="100%" position="absolute" bottom={0} left={0} zIndex={0} alt="" />
    </Flex>
  );
}

export default SpaceDoodlesMobile;
