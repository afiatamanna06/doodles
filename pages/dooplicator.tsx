import { Box, Flex, Image } from "@chakra-ui/react"

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
            <Image src="/dooplicator.gif" w={["100%", "100%", "70%", "50%", "50%"]} alt="" />
            <Flex direction="column">
              <Box maxW={["35rem"]} color="#8B7EEA" fontSize="xl" fontWeight="medium">
                An ordinary device that comes with extraordinary powers usable in Doodles2. You can catch a peak of the Dooplicator in action in the Doodles 2 Trailer revealed on June 21, 2022 at NFT NYC.
              </Box>
              <Box mt="6" maxW={["35rem"]} color="#8B7EEA" fontSize="xl" fontWeight="medium">
                What&apos;s inside? Well, all we can say for now is that it’s one functional piece of Doodle machinery containing nebulous Doodley matter.
              </Box>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default Dooplicator