import { Box, Flex, Image } from "@chakra-ui/react";

function DoodlePuttDescriptionWeb() {
  return (
    <Flex direction={["column", "column", "column", "row", "row"]} gap={4} maxW="65rem" mt="14" pb="6" color="white">
      <Flex direction="column" flex="1" alignItems={["center", "center", "center", "start"]}>
        <Box fontSize="xl" textShadow="0px 1px 0px #80B1FF">Miami, Florida</Box>
        <Flex fontSize={["2xl", "2xl", "2xl", "3xl"]} textShadow="0px 1px 0px #80B1FF" direction={["column", "column", "column", "row", "row"]} gap={4} alignItems="center">
            <Box>December 2nd + 3rd</Box>
            <Box display={["none", "none", "none", "flex", "flex"]} bg="rgb(255, 231, 128)" w=".15rem" h="1.8rem"></Box>
            <Box display={["flex", "flex", "flex", "none", "none"]} bg="rgb(255, 231, 128)" w="13rem" h=".15rem"></Box>
            <Box fontSize={["xl", "xl", "xl", "3xl"]}>Noon - 10pm</Box>
        </Flex>
        <Flex direction="column" fontSize="lg" gap={3} pt="10" px={[4, 4, 6, 0]}>
            <Image src="/putt_reward.svg" h="3rem" w="3rem" alt="" />
            <Box><b>Doodle Holders</b> can register in advance for free admission and priority access to tee-times for you and a guest.</Box>
            <Box color="#fc7cc5">Early registration has ended.</Box>
            <Box>Doodle holders can still attempt to register on site, but capacity is very limited and mini-golf tee times are not guaranteed.</Box>
            <Image ml={[0, 0, 0, 28]} mt="8" src="/putt_ticket.svg" h="3rem" w="3rem" alt="" />
            <Box ml={[0, 0, 0, 28]}><b>General public</b> tickets may be purchased on site subject to availability and capacity.</Box>
        </Flex>
      </Flex>
      <Flex flex="1">
        <Image
          src="/putt_preview.png"
          alt=""
        />
      </Flex>
    </Flex>
  );
}

export default DoodlePuttDescriptionWeb;
