import { Box, Flex, Image } from "@chakra-ui/react";
import DoodlePuttDescriptionWeb from "./DoodlePuttDescriptionWeb";

function DoodlePuttDescription() {
  return (
    <Flex
      direction="column"
      position="relative"
      alignItems="center"
      bg="#99e2ff"
    >
      <Image
        src="/doodleputt_cover.png"
        objectFit="cover"
        h={["30rem", "30rem", "30rem", "full"]}
        display={["none", "none", "flex", "flex", "flex"]}
        alt=""
      />
      <Image
        src="/doodleputt_cover_mobile.png"
        display={["flex", "flex", "none", "none", "none"]}
        alt=""
      />
      <Image
        src="/doodleputt_logo.png"
        w="25%"
        h="25%"
        mt="16"
        display={["none", "none", "none", "flex", "flex"]}
        alt=""
      />
      <Image
        src="/doodleputt_logo.png"
        w={["80%", "80%", "40%"]}
        position="absolute"
        display={["flex", "flex", "flex", "none", "none"]}
        alt=""
      />
      <Box color="white" mt={[8, 8, 8, 8]} px={[4, 4, 4, 0]} fontSize={["2xl", "2xl", "2xl", "3xl"]} maxW="40rem" textAlign="center">Go on an adventure to the world of Doodles with a mini-golf experience like no other.</Box>
      <DoodlePuttDescriptionWeb />
    </Flex>
  );
}

export default DoodlePuttDescription;
