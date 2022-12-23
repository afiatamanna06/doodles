import { Box, Center, Flex, Grid } from "@chakra-ui/react";
import CourseCard from "./CourseCard";
import { courseCardData } from "./CourseCardData";

function CourseSection() {
  return (
    <Flex bg="rgb(121, 232, 179)" justify="center" w="full" position="relative" zIndex={2}>
      <Center>
        <Flex
          maxW="70rem"
          color="white"
          gap={[3]}
          direction={["column"]}
          w="full"
          py={[8, 8, 12, 0]}
          px={[4, 4, 6, 0]}
          alignItems={["start"]}
        >
          <Box fontSize={["3xl"]} textShadow="0px 2px 0px #68c89a">The Course</Box>
          <Box fontSize={["xl"]} maxW="40rem">Travel through 9 mini-golf holes, each representing a different part of the Doodles universe, on a course filled with new worlds to explore, characters to meet, and secrets to unlock.</Box>
          <Grid pt={[4, 4, 4, 0]} templateColumns={["repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(5, 1fr)", "repeat(9, 1fr)"]} gap={[3, 3, 8, 3]}>
            {courseCardData.map(({image, title}, idx) => (
              <CourseCard key={title} title={title} image={image} id={idx+1} />
            ))}
          </Grid>
        </Flex>
      </Center>
    </Flex>
  );
}

export default CourseSection;
