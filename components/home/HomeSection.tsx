import { Box, Button, Flex, Image } from '@chakra-ui/react'
import { FaRegPlayCircle } from "react-icons/fa"

function HomeSection() {
  return (
    <Flex position="relative" justify="center" alignItems="center" color="white" w="100%" minH="94vh">
        <Box position="absolute" zIndex="-1" w="100%" minH="94vh"><video src="/doodles-bg.mp4" style={{ width: "100%", height: "94vh", objectFit: "cover" }} autoPlay muted loop></video></Box>
        <Flex direction="column" alignItems="center" justify="space-between" h="70vh">
            <Flex direction="column" gap={6} alignItems="center">
                <Image src="/doodles2-logo.png" w={["70%", "70%", "60%", "40%", "40%"]} alt="" />
                <Image src="/coming-soon.png" w={["40%", "40%", "20%", "15%", "15%"]} alt="" />
            </Flex>
            <Button border="2px" borderBottomWidth="4px" color="#6681c5" borderColor="#6681c5" px={8} py={6} borderRadius="xl">
                <Flex gap={2} alignItems="center">
                    <FaRegPlayCircle size={18} />
                    <Box fontSize="lg">watch trailer</Box>
                </Flex>
            </Button>
        </Flex>
    </Flex>
  )
}

export default HomeSection