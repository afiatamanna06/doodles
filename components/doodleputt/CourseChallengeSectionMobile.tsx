import { Flex, Image, Box } from "@chakra-ui/react";
import { Parallax } from "react-scroll-parallax";

function CourseChallengeSectionMobile() {
  return (
    <Flex
      direction="column"
      overflow="hidden"
      color="white"
      mt={["10", "10", "10", "20"]}
      bg="#b3ffc7"
      alignItems="center"
      gap={5}
      px={[4, 4, 4, 0]}
      display={["flex", "flex", "flex", "none", "none"]}
    >
      <Image
        src="/text_challenge-awaits.png"
        w={["90%", "90%", "50%"]}
        alt=""
      />
      <Image
        src="/text_sink-a-hole_mobile.png"
        display={["flex", "flex", "none", "none", "none"]}
        w="100%"
        alt=""
      />
      <Image
        src="/text_sink-a-hole_tablet.png"
        display={["none", "none", "flex", "none", "none"]}
        w="100%"
        alt=""
      />
      <Box>*Subject to availability</Box>
      <Flex direction="column" alignItems="center" w="65%">
        <Image src="/stars_sparkle.png" mb="-8" alt="" />
        <Image src="/wormhole.png" alt="" />
      </Flex>
      <Flex
        position="absolute"
        gap={2}
        direction="column"
        left="-15%"
        top={["88%", "88%", "78%"]}
        alignItems="center"
        w="65%"
      >
        <Image src="/star.png" w="21%" alt="" />
        <Image src="/star_shadow.png" w="20%" h="5%" alt="" />
      </Flex>
      <Parallax
        speed={2}
        rotate={["10deg", "0deg"]}
        translateX={["90%", "-50%"]}
        translateY={["-105%", "-105%"]}
      >
        <Image src="/golf_ball.png" zIndex={2} pb="-8" w={["40%", "40%", "100%"]} alt="" />
      </Parallax>
    </Flex>
  );
}

export default CourseChallengeSectionMobile;
