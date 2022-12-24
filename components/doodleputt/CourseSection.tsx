import { Box, Center, Flex, Grid, Image } from "@chakra-ui/react";
import { Parallax } from "react-scroll-parallax";
import CourseCard from "./CourseCard";
import { courseCardData } from "./CourseCardData";
import CourseChallengeSectionWeb from "./CourseChallengeSectionWeb";

function CourseSection() {
  return (
    <Flex
      bg="rgb(121, 232, 179)"
      justify="center"
      w="full"
      position="relative"
      zIndex={2}
    >
      <Center>
        <Flex
          maxW="70rem"
          color="white"
          zIndex={2}
          gap={[3]}
          pb={[8, 8, 12, 48]}
          direction={["column"]}
          w="full"
          pt={[8, 8, 12, 0]}
          px={[4, 4, 6, 0]}
          alignItems={["start"]}
        >
          <Box fontSize={["3xl"]} textShadow="0px 2px 0px #68c89a">
            The Course
          </Box>
          <Box fontSize={["xl"]} maxW="40rem">
            Travel through 9 mini-golf holes, each representing a different part
            of the Doodles universe, on a course filled with new worlds to
            explore, characters to meet, and secrets to unlock.
          </Box>
          <Grid
            pt={[4, 4, 4, 4]}
            w="full"
            templateColumns={[
              "repeat(3, 1fr)",
              "repeat(3, 1fr)",
              "repeat(5, 1fr)",
              "repeat(9, 1fr)",
            ]}
            gap={[3, 3, 3, 4]}
          >
            {courseCardData.map(({ image, title }, idx) => (
              <CourseCard
                key={title}
                title={title}
                image={image}
                id={idx + 1}
              />
            ))}
          </Grid>
          <CourseChallengeSectionWeb />
        </Flex>
      </Center>
      <Image
        src="/greens.png"
        display={["none", "none", "none", "flex", "flex"]}
        position="absolute"
        top={["40%", "30%"]}
        alt=""
      />
      <Image
        src="/greens.png"
        display={["none", "none", "none", "flex", "flex"]}
        position="absolute"
        zIndex={1}
        mt="30%"
        alt=""
      />
      <Image
        src="/foliage_1.png"
        display={["none", "none", "none", "flex", "flex"]}
        position="absolute"
        zIndex={1}
        w="7%"
        left="3%"
        top="60%"
        alt=""
      />
      <Flex
        display={["none", "none", "none", "flex", "flex"]}
        alignItems="end"
        gap={1}
        position="absolute"
        zIndex={1}
        left="16%"
        top="100%"
      >
        <Image src="/flower.png" w="7%" h="10%" alt="" />
        <Image src="/flower.png" w="10%" h="13%" alt="" />
      </Flex>
      <Image
        src="/foliage_2.png"
        display={["none", "none", "none", "flex", "flex"]}
        position="absolute"
        zIndex={1}
        w="4%"
        h="4%"
        left="75%"
        top="99%"
        alt=""
      />
    </Flex>
  );
}

export default CourseSection;
