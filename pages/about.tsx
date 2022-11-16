/* eslint-disable react/jsx-key */
import { Flex, Image } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

function About() {
  return (
    <Flex direction="column" w="full">
      <Marquee
        delay={5}
        direction="right"
        play={true}
        gradientWidth={50}
        pauseOnHover={true}
      >
        <Image src="/about1.png" w="100%" height="10rem" alt="" />
        <Image src="/about2.png" w="100%" height="10rem" alt="" />
        <Image src="/about3.png" w="100%" height="10rem" alt="" />
        <Image src="/about4.png" w="100%" height="10rem" alt="" />
        <Image src="/about5.png" w="100%" height="10rem" alt="" />
        <Image src="/about6.png" w="100%" height="10rem" alt="" />
        <Image src="/about7.png" w="100%" height="10rem" alt="" />
        <Image src="/about8.png" w="100%" height="10rem" alt="" />
        <Image src="/about9.png" w="100%" height="10rem" alt="" />
        <Image src="/about10.png" w="100%" height="10rem" alt="" />
      </Marquee>
    </Flex>
  );
}

export default About;
