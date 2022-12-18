import { Box, Center, Flex } from "@chakra-ui/react";

function DoodlePuttFacilities() {
  return (
    <Box
      w="full"
      bgImage="url('/putt_bottom_bg.png')"
      bgSize={["cover"]}
      bgPosition="right"
      position="relative"
      borderRadius="2xl"
      bgRepeat="no-repeat"
      px="4"
      py="6"
    >
      <Center>
        <Flex
          maxW="74rem"
          gap={5}
          direction="column"
          color="rgb(173, 153, 153)"
          w="full"
          alignItems={["center"]}
        >
            <Flex direction={["column", "column", "column", "row", "row"]}>

            </Flex>
        </Flex>
      </Center>
    </Box>
  );
}

export default DoodlePuttFacilities;
