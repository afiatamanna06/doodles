import { Flex, Image } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

function PuttCloudMarquee() {
  return (
    <Marquee delay={12} direction="right" play={true} gradientWidth={0}>
      <Flex mx={40} gap={[4, 10]} direction="column">
        <Image
          src="/cloud1.png"
          w={["100%", "100%", "100%", "100%"]}
          h={["1rem", "1rem", "3rem", "3rem"]}
          alt=""
        />
        <Image
          src="/cloud1.png"
          ml={["-8", "-8", "-20", "-20"]}
          w={["80%", "80%", "60%", "60%"]}
          h={[".7rem", ".7rem", "2rem", "2rem"]}
          alt=""
        />
      </Flex>
      <Image
        src="/cloud1.png"
        mx={80}
        w={["10%", "10%", "10%", "10%"]}
        h={["2rem", "2rem", "5rem", "5rem"]}
        alt=""
      />
      <Flex mx={40} gap={[4, 10]} direction="column">
        <Image
          src="/cloud1.png"
          w={["100%", "100%", "100%", "100%"]}
          h={["1rem", "1rem", "3rem", "3rem"]}
          alt=""
        />
        <Image
          src="/cloud1.png"
          ml={["-8", "-8", "-20", "-20"]}
          w={["80%", "80%", "60%", "60%"]}
          h={[".7rem", ".7rem", "2rem", "2rem"]}
          alt=""
        />
      </Flex>
      <Image
        src="/cloud1.png"
        mx={80}
        w={["10%", "10%", "10%", "10%"]}
        h={["2rem", "2rem", "5rem", "5rem"]}
        alt=""
      />
    </Marquee>
  );
}

export default PuttCloudMarquee;
