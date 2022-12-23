import { Flex, Image, Box } from "@chakra-ui/react";

function CourseChallengeSectionMobile() {
  return (
    <Flex
      direction="column"
      color="white"
      mt={["10", "10", "10", "20"]}
      bg="#b3ffc7"
      alignItems="center"
      gap={5}
      px={[4, 4, 4, 0]}
      display={["flex", "flex", "flex", "none", "none"]}
    >
      <Image src="/text_challenge-awaits.png" w={["90%", "90%", "50%"]} alt="" />
      <Image src="/text_sink-a-hole_mobile.png" display={["flex", "flex", "none", "none", "none"]} w="100%" alt="" />
      <Image src="/text_sink-a-hole_tablet.png" display={["none", "none", "flex", "none", "none"]} w="100%" alt="" />
      <Box>*Subject to availability</Box>
    </Flex>
  );
}

export default CourseChallengeSectionMobile;
