import { Flex, Image } from "@chakra-ui/react"

function Dooplicator() {
  return (
    <Flex bg="#99E2FF" justify="center">
        <Flex
          maxW="74rem"
          gap={[5, 5, 5, 100, 100]}
          direction={["column", "column", "column", "row", "row"]}
          color="white"
          w="full"
          alignItems={["start", "start", "center", "center", "center"]}
        >
            <Image src="/dooplicator.gif" alt="" />
        </Flex>
    </Flex>
  )
}

export default Dooplicator