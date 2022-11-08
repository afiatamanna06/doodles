import Link from 'next/link'
import { Link as ChakraLink, Image, Flex, Box } from "@chakra-ui/react"
import { FaCircle } from "react-icons/fa"
 
type propTypes = {
    path: string;
    image: string;
    title: string;
    source: string;
    date: string
}

function NewsStandCard({ path, image, title, source, date }: propTypes) {
  return (
    <Link href={path} passHref>
        <ChakraLink display="flex" flexDir="column" rounded="lg">
            <Image src={image} w="15rem" h="10rem" alt="" />
            <Flex direction="column" justify="space-between">
                <Box>{title}</Box>
                <Flex>
                    <Box>{source}</Box>
                    <FaCircle />
                    <Box>{date}</Box>
                </Flex>
            </Flex>
        </ChakraLink>
    </Link>
  )
}

export default NewsStandCard