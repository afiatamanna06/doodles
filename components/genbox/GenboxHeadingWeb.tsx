import { Box, Button, Flex, Image, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

function GenboxHeadingWeb() {
  return (
    <Flex
      direction="column"
      position="relative"
      alignItems="end"
      w="full"
      display={["none", "none", "none", "flex", "flex"]}
    >
      <Box position="absolute" zIndex="-1" w="100%" h="100%">
        <video
          src="/doodles_website_banner.mp4"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          autoPlay
          muted
          loop
        ></video>
      </Box>
      <Flex justify={["end"]} alignItems="end" w="full">
        <Flex direction="column" w="30rem" py="20" mr="40" gap={3}>
          <Image src="/genbox_logo.png" w={["65%", "65%"]} alt="" />

          <Flex
            gap={[0, 0, 0, 12, 12]}
            fontSize="lg"
            direction={["column", "column", "column", "row", "row"]}
            alignItems={["center", "center", "start", "start", "start"]}
          >
            <Box><b>TOTAL SUPPLY:</b> 24,000</Box>
            <Box><b>PRICE:</b> Mkt</Box>
          </Flex>
          <Box fontSize="md" fontWeight="medium">
            Genesis Boxes contain rare wearables for Doodles 2. It is the first
            available product that is part of the Doodles 2 ecosystem. They were
            only available to claim in a 24 hour auction on June 29, 2022.
          </Box>
          <Box fontSize="md" fontWeight="medium">
            Learn how the auction works by reading the&nbsp;
            <ChakraLink textDecoration="underline" fontWeight="semibold">
              <Link href="#FAQ">FAQ</Link>
            </ChakraLink>
            &nbsp;and&nbsp;
            <ChakraLink textDecoration="underline" fontWeight="semibold">
              <Link href="https://docs.doodles.app/terms-of-service-bucket-auction" target="_blank">Bucket Auction Terms of Service</Link>
            </ChakraLink>
            . View the&nbsp;
            <ChakraLink textDecoration="underline">
              <Link href="#results">acution results.</Link>
            </ChakraLink>
          </Box>
          <Box>
            <Link
              href="https://opensea.io/collection/genesis-box"
              target="_blank"
              passHref
            >
              <Button
                borderColor="#a4a4f4"
                px={8}
                borderBottomWidth="2px"
                color="#8a7dea"
                py={6}
                borderRadius="xl"
                _hover={{ opacity: ".85" }}
                _active={{ opacity: ".85" }}
                _focus={{ opacity: ".85" }}
              >
                <Box fontSize="lg">buy on opensea</Box>
              </Button>
            </Link>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default GenboxHeadingWeb;
