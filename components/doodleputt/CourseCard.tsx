import { Box, Flex, Image } from "@chakra-ui/react"

interface propTypes {
    image: string;
    id: number;
    title: string;
}

function CourseCard({ image, id, title }: propTypes) {
  return (
    <Flex direction="column" alignItems="center" color="#6dd1a1" bg="#ffffff">
        <Image src={image} alt="" />
        <Box fontSize="lg">{id}</Box>
        <Box fontSize="sm">{title}</Box>
    </Flex>
  )
}

export default CourseCard