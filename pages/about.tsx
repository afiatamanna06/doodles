import { Flex, Image } from "@chakra-ui/react";
import AboutDescription from "../components/about/AboutDescription";
import AboutHeader from "../components/about/AboutHeader";

function About() {
  return (
    <Flex direction="column" w="full">
      <AboutHeader />
      <AboutDescription />
    </Flex>
  );
}

export default About;
