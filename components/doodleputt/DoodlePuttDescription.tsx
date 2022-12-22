import { Box, Flex, Image } from "@chakra-ui/react";
import CourseSection from "./CourseSection";
import DoodlePuttDescriptionWeb from "./DoodlePuttDescriptionWeb";
import DoodlePuttFacilities from "./DoodlePuttFacilities";
import PuttCloudMarquee from "./PuttCloudMarquee";

function DoodlePuttDescription() {
  return (
    <Flex
      direction="column"
      position="relative"
      alignItems="center"
      bg="rgb(121, 232, 179)"
      w="full"
    >
      <Image
        src="/doodleputt_cover.png"
        objectFit="cover"
        bg="#99e2ff"
        h={["30rem", "30rem", "30rem", "full"]}
        display={["none", "none", "flex", "flex", "flex"]}
        alt=""
      />
      <Image
        src="/doodleputt_cover_mobile.png"
        bg="#99e2ff"
        display={["flex", "flex", "none", "none", "none"]}
        alt=""
      />
      <Image
        src="/doodleputt_logo.png"
        w={["80%", "80%", "40%"]}
        position="absolute"
        display={["flex", "flex", "flex", "none", "none"]}
        alt=""
      />
      <Flex direction="column" w="full" alignItems="center" bg="#99e2ff">
        <Image
          src="/doodleputt_logo.png"
          w="25%"
          h="25%"
          mt="16"
          display={["none", "none", "none", "flex", "flex"]}
          alt=""
        />
        <Box
          color="white"
          mt={[8, 8, 8, 8]}
          textShadow="0px 1px 0px #4EAB7F"
          px={[4, 4, 4, 0]}
          fontSize={["2xl", "2xl", "2xl", "3xl"]}
          maxW="40rem"
          textAlign="center"
        >
          Go on an adventure to the world of Doodles with a mini-golf experience
          like no other.
        </Box>
        <DoodlePuttDescriptionWeb />
      </Flex>
      <Box position="relative" w="full" minH="100vh">
        <Flex direction="column" bg="#99e2ff" pt="12">
          <Box w="full" position="absolute" top="12">
            <PuttCloudMarquee />
          </Box>
          <Image src="/putt_bushes.png" mt="-16" zIndex={2} w={["full"]} alt="" />
        </Flex>
        <CourseSection />
      </Box>
      <DoodlePuttFacilities />
    </Flex>
  );
}

export default DoodlePuttDescription;
