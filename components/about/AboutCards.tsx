import { Box, Flex, Image } from "@chakra-ui/react"
import Link from "next/link";

interface propTypes {
  bg: string;
  titleImg: string;
  description: string;
  link: string;
  path: string;
  image: string;
}

function AboutCards({bg, titleImg, description, link, path, image}: propTypes) {
  return (
    <Flex direction="column" bg={bg} p="6">
      <Flex direction="column" alignItems="start">
        <Image src={titleImg} alt="" />
        <Box>{description}</Box>
        <Link href={path} passHref>
          <Box>{`${link} >`}</Box>
        </Link>
      </Flex>
      <Flex justify="center">
        <Image src={image} alt="" />
      </Flex>
    </Flex>
  )
}

export default AboutCards