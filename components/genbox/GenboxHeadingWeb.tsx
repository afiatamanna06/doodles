import { Box, Button, Flex, Image } from "@chakra-ui/react";
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
            <Box>TOTAL SUPPLY: 24,000</Box>
            <Box>PRICE: Mkt</Box>
          </Flex>
          <Box fontSize="md" fontWeight="medium">
            Genesis Boxes contain rare wearables for Doodles 2. It is the first
            available product that is part of the Doodles 2 ecosystem. They were
            only available to claim in a 24 hour auction on June 29, 2022.
          </Box>
          <Box fontSize="md" fontWeight="medium">
            What&apos;s inside? Well, all we can say for now is that it&apos;s
            one functional piece of Doodle machinery containing nebulous Doodley
            matter.
          </Box>
          <Box>
            <Link
              href="https://opensea.io/collection/genesis-box"
              target="_blank"
              passHref
            >
              <Button
                border="2px"
                borderColor="#6681c5"
                px={8}
                borderBottomWidth="4px"
                color="#6681c5"
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
