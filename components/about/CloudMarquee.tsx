import { Image } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

function CloudMarquee() {
  return (
    <Marquee
      delay={12}
      direction="right"
      play={true}
      gradientWidth={0}
    >
      <Image src="/clouds-three.png" w="100%" h="14rem" alt="" />
      <Image src="/clouds-three.png" w="100%" h="14rem" alt="" />
      <Image src="/clouds-three.png" w="100%" h="14rem" alt="" />
    </Marquee>
  )
}

export default CloudMarquee