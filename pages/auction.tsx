import { Box, Flex, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import GenBoxHeading from "../components/genbox/GenBoxHeading";

function Auction() {
  return (
    <Flex direction="column" position="relative" w="full">
      <GenBoxHeading />
      <Flex
        direction="column"
        bg="rgb(242 231 234)"
        px="4"
        py="8"
        color="#313a71"
        fontSize="xl"
        fontWeight="light"
        display={["flex", "flex", "flex", "none", "none"]}
      >
        <Box>
          Genesis Boxes contain rare wearables for Doodles 2. It is the first
          available product that is part of the Doodles 2 ecosystem. They were
          only available to claim in a 24 hour auction on June 29, 2022.
        </Box>
        <Box>
          Learn how the auction works by reading the&nbsp;
          <ChakraLink textDecoration="underline" fontWeight="semibold">
            <Link href="#FAQ">FAQ</Link>
          </ChakraLink>
          &nbsp;and&nbsp;
          <ChakraLink textDecoration="underline" fontWeight="semibold">
            <Link href="https://docs.doodles.app/terms-of-service-bucket-auction">
              Bucket Auction Terms of Service
            </Link>
          </ChakraLink>
          . View the&nbsp;
          <ChakraLink textDecoration="underline">
            <Link href="#results">acution results.</Link>
          </ChakraLink>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Auction;
