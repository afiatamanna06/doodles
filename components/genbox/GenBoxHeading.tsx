import { Box, Flex } from "@chakra-ui/react";

export default function GenBoxHeading() {
  return (
    <Flex position="relative" color="white" w="100%">
        <Box position="absolute" zIndex="-1" w="100%"><video src="/doodles_website_banner.mp4" style={{ width: "100%", objectFit: "cover" }} autoPlay muted loop></video></Box>
        <Box position="relative" h="24.7rem"></Box>
    </Flex>
  )
}
