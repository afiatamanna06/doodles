import { Box, Center, Flex } from "@chakra-ui/react"
import SignUpInput from "./SignUpInput"

function LatestNewsSection() {
  return (
    <Box w="full" bg="#80B1FF" px="4" py="6">
      <Center>
        <Flex maxW="74rem" color="white" w="full" justify="space-between" alignItems="center">
            <Flex direction="column">
                <Box textShadow="0px 2px 0px #5086dc">Doodles2 is coming soon</Box>
                <Box>get the latest news delivered to your inbox</Box>
            </Flex>
            <SignUpInput />
        </Flex>
      </Center>
    </Box>
  )
}

export default LatestNewsSection