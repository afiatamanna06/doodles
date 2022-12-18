import { Box, Flex, Image } from "@chakra-ui/react";

interface propTypes {
    image: string;
    title: string;
    description: string
}

function DoodlePuttFacilitiesCard({ image, title, description }: propTypes) {
  return (
    <Flex direction="column" gap={1} alignItems={["center", "center", "center", "start"]}>
        <Image src={image} h="3rem" w="3rem" alt="" />
        <Box fontWeight="semibold" mt="1">{title}</Box>
        <Box textAlign={["center", "center", "center", "start"]}>{description}</Box>
    </Flex>
  )
}

export default DoodlePuttFacilitiesCard