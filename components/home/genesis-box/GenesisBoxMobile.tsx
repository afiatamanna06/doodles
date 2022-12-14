import { Box, Button, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";

function GenesisBoxMobile() {
  return (
    <Flex
      direction="column"
      w="full"
      alignItems="center"
      display={["flex", "flex", "flex", "none", "none"]}
    >
      <Image src="/text_genbox-promo-mobile.png" w="100%" alt="" />
      <Flex
        color="white"
        mt="5"
        bgImage="url('/genbox_header_mobile.png')"
        bgSize={["cover"]}
        bgPosition="center"
        borderRadius="2xl"
        bgRepeat="no-repeat"
        w="full"
        justify={["center"]}
      >
        <Image src="/genbox.gif" w="25rem" h="100%" alt="" />
      </Flex>
      <Box
        textAlign="center"
        color="#313A71"
        fontSize="xl"
        fontWeight="medium"
        py="12"
      >
        Genesis boxes contain a rare assortment of apparel and accessories you
        can use on day one of Doodles 2.
      </Box>
      <Box>
        <Link href="https://opensea.io/collection/genesis-box" target="_blank" passHref>
          <Button
            borderBottomWidth="2px"
            color="white"
            borderColor="#6681c5"
            px={8}
            bg="#80B1FF"
            py={8}
            mb="3"
            borderRadius="xl"
            _hover={{ opacity: ".85" }}
            _active={{ opacity: ".85" }}
            _focus={{ opacity: ".85" }}
          >
            <Box fontSize="xl">buy on opensea</Box>
          </Button>
        </Link>
      </Box>
      <Box color="#313A71" textAlign="center" fontWeight="medium" fontSize="lg">
        <Link href="/auction" passHref>
          learn more
        </Link>
      </Box>
    </Flex>
  );
}

export default GenesisBoxMobile;
