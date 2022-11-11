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
    <Link href={path} target="_blank" passHref>
            <Flex direction="column" color="#313A71" _hover={{ textDecoration: "underline" }} rounded="lg" bg="white" h="100%">
                <Image src={image} w="100%" borderTopRadius="lg" minH="9rem" objectFit="cover" alt="" />
                <Flex p="4" color="#AD9999" h="100%" direction="column" justify="space-between">
                    <Box color="#313A71" fontWeight={600}>{title}</Box>
                    <Flex fontSize="sm" gap={2} alignItems="center">
                        <Box fontWeight="semibold">{source}</Box>
                        <FaCircle size={5} />
                        <Box fontWeight="thin">{date}</Box>
                    </Flex>
                </Flex>
            </Flex>
    </Link>
  )
}

export default NewsStandCard