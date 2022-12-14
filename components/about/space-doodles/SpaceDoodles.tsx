import { Box, Flex } from "@chakra-ui/react";
import SpaceDoodlesMobile from "./SpaceDoodlesMobile";
import SpaceDoodlesTab from "./SpaceDoodlesTab";
import SpaceDoodlesWeb from "./SpaceDoodlesWeb";

function SpaceDoodles() {
  return (
    <Box>
      <Flex
        justify={["start", "start", "start", "center", "center"]}
        w="full"
      >
        <Flex
          direction="column"
          maxW="74rem"
          color="white"
          w="full"
          px={[4, 4, 4, 4, 0]}
          alignItems={["center"]}
        >
            <SpaceDoodlesWeb />
            <SpaceDoodlesMobile />
            <SpaceDoodlesTab />
        </Flex>
      </Flex>
    </Box>
  );
}

export default SpaceDoodles;
