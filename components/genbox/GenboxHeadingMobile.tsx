import { Box, Button, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";

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
      bgRepeat="no-repeat"
    >
      <Image
        src="/genbox.gif"
        w={["100%", "100%", "70%"]}
        h={["60%", "60%", "75%"]}
        top={["40%", "40%", "27%"]}
        position="absolute"
        zIndex={0}
        alt=""
      />
      <Flex
        direction="column"
        alignItems="center"
        justify="space-between"
        minH={["93vh", "80vh", "65vh"]}
        py="12"
        zIndex={1}
      >
        <Flex direction="column" gap={6} alignItems="center">
          <Image src="/genbox_logo.png" w={["75%", "75%", "40%"]} alt="" />

          <Flex
            gap={[3, 3, 12, 12, 12]}
            fontSize="lg"
            direction={["column", "row"]}
            alignItems={["center", "center"]}
          >
            <Box><b>TOTAL SUPPLY:</b> 24,000</Box>
            <Box><b>PRICE:</b> Mkt</Box>
          </Flex>
        </Flex>
        <Flex w="full" justify="center">
          <Link
            href="https://opensea.io/collection/genesis-box"
            target="_blank"
            passHref
          >
            <Button
              borderColor="#a4a4f4"
              px={12}
              borderBottomWidth="2px"
              color="#8a7dea"
              py={6}
              borderRadius="xl"
              _hover={{ opacity: ".85" }}
              _active={{ opacity: ".85" }}
              _focus={{ opacity: ".85" }}
            >
              <Box fontSize="xl">buy on opensea</Box>
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default GenboxHeadingMobile;
