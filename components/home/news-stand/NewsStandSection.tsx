import { Box, Center, Flex, Image } from '@chakra-ui/react'

function NewsStandSection() {
  return (
    <Box w="full" bg="#99E2FF" px="4" py="28">
      <Center>
        <Flex maxW="74rem" gap={5} direction={["column"]} color="white" w="full" alignItems={["center"]}>
            <Image src="/the-news-stand.png" w={["80%", "80%", "40%", "30%", "25%"]} h={["80%", "80%", "40%", "30%", "25%"]} alt="" />
        </Flex>
      </Center>
    </Box>
  )
}

export default NewsStandSection