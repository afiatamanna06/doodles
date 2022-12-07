import { Box, Flex, Image } from "@chakra-ui/react";
import NftnycCard from "../../components/nftnyc/NftnycCard";
import { nftnycCardsData } from "../../components/nftnyc/NftnycData";

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
      <Image src="/nftnyc-clouds.png" w={["70%", "70%", "40%", "20%"]} objectFit="cover" position="absolute" top={10} left={[0, 0, "10rem", "28rem"]} zIndex={1} alt="" />
      <Image src="/nftnyc-cover.png" display={["flex", "flex", "flex", "none", "none"]} w={["100%"]} h="50rem" objectFit="cover" position="absolute" top={[300, 300, 300, 150]} left={[0]} zIndex={0} alt="" />
      <Image src="/nftnyc-cover.png" display={["none", "none", "none", "flex", "flex"]} w={["100%"]} minH="100%" objectFit="cover" position="absolute" top={[10, 10, 10, 150]} left={[0]} zIndex={0} alt="" />
      <Flex direction="column" bg={["#79e8b3", "#79e8b3", "#79e8b3", "none"]} gap={8} px="6" position="relative" maxW="74rem" alignItems={["start"]} w="full" mt={["49rem", "49rem", "49rem", "70rem"]}>
        <Box maxW="40rem" fontSize={["2xl", "2xl", "2xl", "2xl"]}>Join Doodle and Dooplicator holders from around the world at NFT NYC for a Doodles product trailer premiere, a brand new IRL experience, and exclusive holder-only benefits over 3 days of events.</Box>
        <Box maxW="40rem" fontSize={["2xl", "2xl", "2xl", "2xl"]} mt="10">Schedule</Box>
        <Flex direction={["column", "column", "column", "row", "row"]} gap={6} pb="20">
          {nftnycCardsData.map(({name, date, location, events}) => (
            <NftnycCard key={name} name={name} date={date} location={location} events={events} />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Nftnyc;
