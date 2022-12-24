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
        <Image src="/stars_sparkle.png" mb="-8" alt="" />
        <Image src="/wormhole.png" alt="" />
      </Flex>
      <Flex position="absolute" gap={2} direction="column" left="65%" alignItems="center" w="15%">
        <Image src="/star.png" w="21%" alt="" />
        <Image src="/star_shadow.png" w="20%" h="5%" alt="" />
      </Flex>
      <Flex direction="column" zIndex={2} pt="10">
        <Parallax
          speed={2}
          rotate={[
            '10deg',
            '0deg'
          ]}
          translateX={["50%", "-50%"]}
          translateY={["35%", "35%"]}
        >
          <Image src="/golf_ball.png" zIndex={2} pb="-8" w="20%" alt="" />
        </Parallax>
        <Parallax
          speed={20}
          translateX={["40%", "-25%"]}
          translateY={["45%", "45%"]}
        >
          <Image src="/ball_shadow.png" zIndex={1} w="30%" alt="" />
        </Parallax>
      </Flex>
    </Flex>
  );
}

export default CourseChallengeSectionWeb;
