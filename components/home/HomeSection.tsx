import { Box, Flex } from '@chakra-ui/react'

function HomeSection() {
  return (
    <Flex position="relative" justify="center" alignItems="center" color="white" w="100%" minH="94vh">
        <Box position="absolute" zIndex="-1" w="100%" minH="94vh"><video src="/doodles-bg.mp4" style={{ width: "100%", height: "94vh", objectFit: "cover" }} autoPlay muted loop></video></Box>
    </Flex>
  )
}

export default HomeSection