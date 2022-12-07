import { Box, Flex, Image } from "@chakra-ui/react";

function Nftnyc() {
  return (
    <Flex
      direction="column"
      w="full"
      alignItems="center"
      color="white"
      bg="#99e2ff"
      overflow="hidden"
      position="relative"
    >
      <Image src="/nftnyc-cover.png" w="100%" minH="100%" objectFit="cover" position="absolute" top={150} left={0} zIndex={0} alt="" />
      <Flex direction="column" gap={8} px="6" position="relative" maxW="74rem" alignItems={["start"]} w="full" mt={["110vh"]}>
        <Box maxW="40rem" fontSize={["2xl", "2xl", "2xl", "2xl"]}>Join Doodle and Dooplicator holders from around the world at NFT NYC for a Doodles product trailer premiere, a brand new IRL experience, and exclusive holder-only benefits over 3 days of events.</Box>
        <Box maxW="40rem" fontSize={["2xl", "2xl", "2xl", "2xl"]} mt="10">Schedule</Box>
      </Flex>
    </Flex>
  );
}

export default Nftnyc;
