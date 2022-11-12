import { Box, Button, Flex, Image } from "@chakra-ui/react";
import GenesisBoxMobile from "./GenesisBoxMobile";
import GenesisBoxWeb from "./GenesisBoxWeb";

function GenesisBox() {
  return (
    <Box>
      <Flex
        justify={["start", "start", "start", "center", "center"]}
        w="full"
        bg="#99E2FF"
      >
        <Flex
          direction="column"
          maxW="74rem"
          color="white"
          w="full"
          p={[4, 4, 4, 4, 0]}
          alignItems={["center"]}
        >
          <GenesisBoxMobile />
          <GenesisBoxWeb />
        </Flex>
      </Flex>
    </Box>
  );
}

export default GenesisBox;
