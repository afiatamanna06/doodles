import { Box, Center, Flex, Image } from "@chakra-ui/react";
import AboutDescription from "../components/about/AboutDescription";
import AboutHeader from "../components/about/AboutHeader";

function About() {
  return (
    <Flex direction="column" w="full">
      <AboutHeader />
      <AboutDescription />
      <Box w="full" bg="white" px="6" pb="12">
        <Center>
          <Flex
            maxW="74rem"
            gap={[5, 5, 5, 100, 100]}
            direction={["column", "column", "column", "row", "row"]}
            w="full"
            alignItems={["start", "start", "center", "center", "center"]}
          >
            <Image display={["none", "none", "none", "flex", "flex"]} src="/pencil-drawing.png" w="70%" alt="" />
            <Image display={["flex", "flex", "flex", "none", "none"]} transform="scaleX(-1)" src="/pencil-drawing.png" w="100%" alt="" />
          </Flex>
        </Center>
      </Box>
    </Flex>
  );
}

export default About;
