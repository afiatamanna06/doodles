import { Box, Button, Center, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import { Parallax } from "react-scroll-parallax";

function AboutDescription() {
  return (
    <Box w="full" bg="white" px="6" py="28">
      <Center>
        <Flex
          maxW="74rem"
          gap={[5, 5, 5, 100, 100]}
          direction={["column", "column", "column", "row", "row"]}
          w="full"
          alignItems={["start", "start", "center", "center", "center"]}
        >
          <Flex direction="column" gap={8}>
            <Image
              src="/logo-01.svg"
              w={["40%", "40%", "30%", "20%", "20%"]}
              alt=""
            />
            <Box fontSize={["xl", "xl", "xl", "2xl"]}>
              A collection of 10,000 NFTs (non-fungible tokens) that are made up
              of hundreds of exciting visual traits designed by Burnt Toast.
              Hand-drawn Doodles include skellys, cats, aliens, apes and
              mascots. The Doodles collection also includes dozens of rare
              heads, costumes, and colorways of the artist&apos;s palette.
            </Box>
            <Box>
              The Doodles universe is ever-expanding and new experiences like
              Space Doodles are only available to collectors. While the universe
              expands, our brand grows, and collectors can expect exclusive
              access to the latest products, merchandise and events through
              ownership.
            </Box>
            <Box>
              Owning a Doodle allows you to vote on community-driven features,
              products and events. This makes our roadmap collaborative to be
              decided by the project founders and Doodle holders via the
              Doodlebank. The Doodlebank is our community treasury which boasts
              over $5m USD and is used to fund these experiences.
            </Box>
            <Box w="full">
              <Link
                href="https://opensea.io/collection/doodles-official"
                target="_blank"
                passHref
              >
                <Button
                  borderColor="#6681c5"
                  px={8}
                  borderBottomWidth="2px"
                  color="#6681c5"
                  py={6}
                  borderRadius="xl"
                  _hover={{ opacity: ".85" }}
                  _active={{ opacity: ".85" }}
                  _focus={{ opacity: ".85" }}
                >
                  <Box fontSize="lg">browse doodles</Box>
                </Button>
              </Link>
            </Box>
          </Flex>
          <Flex gap={8} display={["none", "none", "none", "flex", "flex"]}>
            <Flex direction="column">
              <Parallax speed={14}>
                <Image src="/doodle-card-mascot.png" w={["100%"]} alt="" />
              </Parallax>
              <Parallax speed={14}>
                <Image src="/doodle-card-rare.png" w={["100%"]} alt="" />
              </Parallax>
            </Flex>
            <Flex direction="column" gap={6} mt="20">
              <Parallax speed={8}>
                <Image src="/doodle-card-alien.png" w={["100%"]} alt="" />
              </Parallax>
              <Parallax speed={8}>
                <Image src="/doodle-card-common.png" w={["100%"]} alt="" />
              </Parallax>
            </Flex>
          </Flex>
          <Flex gap={8} display={["flex", "flex", "flex", "none", "none"]}>
            <Flex direction="column" gap={5}>
              <Parallax speed={3}>
                <Image src="/doodle-card-mascot.png" w={["100%"]} alt="" />
              </Parallax>
              <Parallax speed={3}>
                <Image src="/doodle-card-rare.png" w={["100%"]} alt="" />
              </Parallax>
            </Flex>
            <Flex direction="column" gap={6} mt="20">
              <Parallax speed={2}>
                <Image src="/doodle-card-alien.png" w={["100%"]} alt="" />
              </Parallax>
              <Parallax speed={2}>
                <Image src="/doodle-card-common.png" w={["100%"]} alt="" />
              </Parallax>
            </Flex>
          </Flex>
        </Flex>
      </Center>
    </Box>
  );
}

export default AboutDescription;
