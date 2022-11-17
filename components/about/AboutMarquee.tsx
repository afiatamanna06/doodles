import { Image } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

type propTypes = {
    direction: "left" | "right"
}

function AboutMarquee({ direction }: propTypes) {
  return (
    <Marquee
      delay={10}
      direction={direction}
      play={true}
      gradientWidth={50}
      pauseOnHover={true}
    >
      <Image src="/about1.png" w="50%" mx="1" height="9rem" alt="" />
      <Image src="/about2.png" w="50%" mr="1" height="9rem" alt="" />
      <Image src="/about3.png" w="50%" mr="1" height="9rem" alt="" />
      <Image src="/about4.png" w="50%" mr="1" height="9rem" alt="" />
      <Image src="/about5.png" w="50%" mr="1" height="9rem" alt="" />
      <Image src="/about6.png" w="50%" mr="1" height="9rem" alt="" />
      <Image src="/about7.png" w="50%" mr="1" height="9rem" alt="" />
      <Image src="/about8.png" w="50%" mr="1" height="9rem" alt="" />
      <Image src="/about9.png" w="50%" mr="1" height="9rem" alt="" />
      <Image src="/about10.png" w="50%" mr="1" height="9rem" alt="" />
      <Image src="/about11.png" w="50%" mr="1" height="9rem" alt="" />
      <Image src="/about12.png" w="50%" mr="1" height="9rem" alt="" />
      <Image src="/about13.png" w="50%" mr="1" height="9rem" alt="" />
      <Image src="/about14.png" w="50%" mr="1" height="9rem" alt="" />
      <Image src="/about15.png" w="50%" mr="1" height="9rem" alt="" />
      <Image src="/about16.png" w="50%" mr="1" height="9rem" alt="" />
      <Image src="/about17.png" w="50%" mr="1" height="9rem" alt="" />
      <Image src="/about18.png" w="50%" mr="1" height="9rem" alt="" />
      <Image src="/about19.png" w="50%" mr="1" height="9rem" alt="" />
      <Image src="/about20.png" w="50%" mr="1" height="9rem" alt="" />
      <Image src="/about21.png" w="50%" mr="1" height="9rem" alt="" />
      <Image src="/about22.png" w="50%" mr="1" height="9rem" alt="" />
      <Image src="/about23.png" w="50%" mr="1" height="9rem" alt="" />
      <Image src="/about24.png" w="50%" height="9rem" alt="" />
    </Marquee>
  );
}

export default AboutMarquee;
