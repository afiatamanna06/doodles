import { Box, Button, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";

function Dooplicator() {
  return (
    <Flex bg="#99E2FF" justify="center">
      <Flex
        pt="24"
        pb="12"
        maxW="74rem"
        gap={[5, 5, 5, 0, 0]}
        direction={["column", "column", "column", "row", "row"]}
        color="white"
        w="full"
        alignItems={["start", "start", "center", "center", "center"]}
      >
        <Image
          src="/dooplicator.gif"
          w={["100%", "100%", "70%", "50%", "50%"]}
          alt=""
        />
        <Flex direction="column" gap={[5, 5, 5, 8, 8]}>
          <Flex gap={[0, 0, 0, 12, 12]}>
            <Image
              src="/text_dooplicator.png"
              w={["85%", "85%", "70%", "55%", "55%"]}
              alt=""
            />
            <Image
              src="/icon-star.png"
              w={["5%", "5%", "5%", "3%", "3%"]}
              h="min-content"
              alt=""
            />
          </Flex>
          <Box color="#8B7EEA" fontSize="xl" fontWeight="medium">
            An ordinary device that comes with extraordinary powers usable in
            Doodles2. You can catch a peak of the Dooplicator in action in the
            Doodles 2 Trailer revealed on June 21, 2022 at NFT NYC.
          </Box>
          <Box color="#8B7EEA" fontSize="xl" fontWeight="medium">
            What&apos;s inside? Well, all we can say for now is that it&apos;s
            one functional piece of Doodle machinery containing nebulous Doodley
            matter.
          </Box>
          <Flex gap={[0, 0, 0, 12, 12]} fontSize="lg">
            <Flex gap={1}>
              <Box>MAX SUPPLY:</Box>
              <Link
                href="https://opensea.io/collection/the-dooplicator"
                target="_blank"
                passHref
              >
                <Box>10,000</Box>
              </Link>
            </Flex>
            <Box>PRICE: Free. One for every Doodle</Box>
          </Flex>
          <Image
            src="/linebreak_rainbow.png"
            w={["100%"]}
            h="min-content"
            alt=""
          />
          <Link
            href="https://opensea.io/collection/the-dooplicator"
            target="_blank"
            passHref
          >
            <Button
              border="2px"
              borderColor="#6681c5"
              px={8}
              borderBottomWidth="4px"
              color="#6681c5"
              py={6}
              borderRadius="xl"
              _hover={{ opacity: ".85" }}
              _active={{ opacity: ".85" }}
              _focus={{ opacity: ".85" }}
            >
              <Box fontSize="lg">buy on opensea</Box>
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Dooplicator;
