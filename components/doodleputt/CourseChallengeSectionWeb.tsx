import { Box, Flex, Image } from "@chakra-ui/react"

function CourseChallengeSectionWeb() {
  return (
    <Flex direction="column" color="white" mt={["10", "10", "10", "20"]} gap={5} display={["none", "none", "none", "flex", "flex"]}>
      <Image src="/text_challenge-awaits.png" w="30%" alt="" />
      <Image src="/text_sink-a-hole.png" w="35%" alt="" />
      <Box>*Subject to availability</Box>
    </Flex>
  )
}

export default CourseChallengeSectionWeb