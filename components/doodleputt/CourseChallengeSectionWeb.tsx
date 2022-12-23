import { Box, Flex, Image } from "@chakra-ui/react";
import { Parallax } from "react-scroll-parallax";

function CourseChallengeSectionWeb() {
  return (
    <Flex
      color="white"
      w="100%"
      gap={20}
      mt={["10", "10", "10", "20"]}
      display={["none", "none", "none", "flex", "flex"]}
    >
      <Flex direction="column" gap={5} w="30%">
        <Image src="/text_challenge-awaits.png" alt="" />
        <Image src="/text_sink-a-hole.png" alt="" />
        <Box>*Subject to availability</Box>
      </Flex>
      <Flex direction="column" alignItems="center" w="15%">
        <Image src="/stars_sparkle.png" mb="-8" zIndex={2} alt="" />
        <Image src="/wormhole.png" alt="" />
      </Flex>
      <Parallax
        speed={14}
        rotate={[
          '70deg',
          '0deg'
        ]}
        translateX={["50%", "-50%"]}
        translateY={["38%", "38%"]}
      >
        <Image src="/golf_ball.png" w="50%" alt="" />
      </Parallax>
    </Flex>
  );
}

export default CourseChallengeSectionWeb;
