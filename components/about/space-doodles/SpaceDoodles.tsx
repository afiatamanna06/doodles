import { Box, Flex } from "@chakra-ui/react";

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
          p={[4, 4, 4, 4, 0]}
          alignItems={["center"]}
        >
            
        </Flex>
      </Flex>
    </Box>
  );
}

export default SpaceDoodles;
