import { Box, Flex, Image } from "@chakra-ui/react"
import Link from "next/link";

interface propTypes {
  bg: string;
  titleImg: string;
  titleImgW: string[];
  titleImgH: string[];
  description: string;
  link: string;
  path: string;
  image: string;
  imageW: string[];
  imageH: string[];
  target: boolean;
}

function AboutCards({bg, titleImg, description, link, path, image, titleImgH, titleImgW, imageW, imageH, target}: propTypes) {
  return (
    <Flex direction="column" justify="space-between" bg={bg} p="6" flex="1" h="max-content" borderRadius="2xl" minH={["28rem", "28rem", "", "26rem"]} gap={4}>
      <Flex direction="column" alignItems="start" h="100%" gap={4}>
        <Image src={titleImg} w={titleImgW} h={titleImgH} alt="" />
        <Box>{description}</Box>
        <Link href={path} target={target ? "_blank" : "_self"} passHref>
          <Box color="#5086dc">{`${link} >`}</Box>
        </Link>
      </Flex>
      <Flex justify="center">
        <Image src={image} w={imageW} h={imageH} alt="" />
      </Flex>
    </Flex>
  )
}

export default AboutCards