import { Box, Center, Flex } from "@chakra-ui/react";

function CourseSection() {
  return (
    <Flex bg="rgb(121, 232, 179)" justify="center" w="full" position="relative" zIndex={2}>
      <Center>
        <Flex
          maxW="60rem"
          color="white"
          gap={[3]}
          direction={["column"]}
          w="full"
          alignItems={["center", "center", "center", "start"]}
        >
          <Box fontSize={["3xl"]} textShadow="0px 2px 0px #68c89a">The Course</Box>
          <Box fontSize={["xl"]} maxW="40rem">Travel through 9 mini-golf holes, each representing a different part of the Doodles universe, on a course filled with new worlds to explore, characters to meet, and secrets to unlock.</Box>
        </Flex>
      </Center>
    </Flex>
  );
}

export default CourseSection;
