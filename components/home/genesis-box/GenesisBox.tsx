import { Box, Button, Flex, Image } from "@chakra-ui/react";

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
          <Flex
            maxW="74rem"
            color="white"
            bgImage="url('/genbox.png')"
            bgSize={["cover"]}
            bgPosition="right"
            borderRadius="2xl"
            bgRepeat="no-repeat"
            w="full"
            alignItems={["start", "start", "start", "center", "center"]}
          >
            <Flex
              direction={["column", "column", "column", "row", "row"]}
              gap={[8, 8, 8, 20, 20]}
              w="100%"
              maxH={["100%", "100%", "100%", "27rem"]}
              p="14"
            >
              <Flex direction="column" gap="8" display={["none", "none", "none", "flex", "flex"]}>
                <Image src="/text_genbox-promo.png" w="70%" alt="" />
                <Box maxW={["35rem"]} fontSize="xl" fontWeight="medium">
                  Genesis boxes contain a rare assortment of apparel and
                  accessories you can use on day one of Doodles 2.
                </Box>
                <Flex direction="column" gap={3} w="min-content" alignItems="center">
                  <Button
                    borderBottomWidth="2px"
                    color="white"
                    borderColor="#6681c5"
                    px={8}
                    bg="#80B1FF"
                    py={6}
                    borderRadius="xl"
                  >
                    <Box fontSize="lg">buy on opensea</Box>
                  </Button>
                  <Box textShadow="0px 2px #2e2731" fontWeight="medium" fontSize="lg">learn more</Box>
                </Flex>
              </Flex>
              <Image src="/genbox.gif" w="25rem" h="100%" alt="" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default GenesisBox;
