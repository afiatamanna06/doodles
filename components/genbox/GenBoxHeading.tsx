import { Box, Flex } from "@chakra-ui/react";
import GenboxHeadingMobile from "./GenboxHeadingMobile";
import GenboxHeadingWeb from "./GenboxHeadingWeb";

export default function GenBoxHeading() {
  return (
    <Flex position="relative" color="white" w="100%">
        <GenboxHeadingWeb />
        <GenboxHeadingMobile />
    </Flex>
  )
}
