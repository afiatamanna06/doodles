import { Box, Center, Flex, Image } from "@chakra-ui/react";

function AboutSection() {
  return (
    <Box w="full" bg="#99E2FF" px="4" py="28">
      <Center>
        <Flex
          maxW="74rem"
          gap={[5, 5, 5, 100, 100]}
          direction={["column", "column", "column", "row", "row"]}
          color="white"
          w="full"
          alignItems={["start", "start", "center", "center", "center"]}
        >
          <Image
            src="/doodles2-app.png"
            w={["100%", "100%", "60%", "30%", "25%"]}
            h={["100%", "100%", "60%", "30%", "25%"]}
            alt=""
          />
          <Flex direction="column" gap={2}>
            <Box
              maxW={["40rem"]}
              textShadow="0px 2px 0px #5086dc"
              fontSize={["2xl", "2xl", "2xl", "4xl", "4xl"]}
            >
              Doodles 2 lets anyone create a uniquely personalized and endlessly
              customizable character in the one-of-a-kind style from artist
              Burnt Toast.
            </Box>
            <Box maxW={["40rem"]} color="#313A71" fontSize="lg">
              Doodles 2 characters can have their appearances updated and saved
              to the blockchain with no transaction fees. They will incorporate
              music from the biggest artists that can be unlocked and utilized.
              Characters and wearables from Doodles 2 can easily be bought,
              traded, or sold.
            </Box>
          </Flex>
        </Flex>
      </Center>
    </Box>
  );
}

export default AboutSection;
