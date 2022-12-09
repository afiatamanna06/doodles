import { Flex, Image } from "@chakra-ui/react"

function GenboxHeadingMobile() {
  return (
    <Flex
      display={["flex", "flex", "flex", "none", "none"]}
      direction="column"
      w="full"
      alignItems="center"
      color="white"
      bgImage="url('/genbox_header_mobile.png')"
      bgSize={["cover"]}
      position="relative"
      bgPosition="center"
      bgRepeat="no-repeat">
        <Image src="/genbox.gif" w="100%" h="100%" alt="" />  
    </Flex>
  )
}

export default GenboxHeadingMobile