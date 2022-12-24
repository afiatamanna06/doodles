import { Box, Button, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";

function GenesisBoxWeb() {
  return (
    <Flex
      display={["none", "none", "none", "flex", "flex"]}
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
        <Flex direction="column" gap="8">
          <Image src="/text_genbox-promo.png" w="70%" alt="" />
          <Box maxW={["35rem"]} fontSize="xl" fontWeight="medium">
            Genesis boxes contain a rare assortment of apparel and accessories
            you can use on day one of Doodles 2.
          </Box>
          <Flex direction="column" gap={3} w="min-content" alignItems="center">
            <Link href="https://opensea.io/collection/genesis-box" target="_blank" passHref>
              <Button
                borderBottomWidth="2px"
                color="white"
                borderColor="#6681c5"
                px={8}
                bg="#80B1FF"
                py={6}
                borderRadius="xl"
                _hover={{ opacity: ".85" }}
                _active={{ opacity: ".85" }}
                _focus={{ opacity: ".85" }}
              >
                <Box fontSize="lg">buy on opensea</Box>
              </Button>
            </Link>
            <Box textShadow="0px 2px #2e2731" fontWeight="medium" fontSize="lg">
              <Link href="/auction" passHref>
                learn more
              </Link>
            </Box>
          </Flex>
        </Flex>
        <Image src="/genbox.gif" w="25rem" h="100%" alt="" />
      </Flex>
    </Flex>
  );
}

export default GenesisBoxWeb;
