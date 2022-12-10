import { Box, Flex } from "@chakra-ui/react";
import { FaEthereum } from "react-icons/fa"

function BucketAuctionSection() {
  return (
    <Flex
      direction="column"
      w={["full", "full", "full", "60%"]}
      position="relative"
      alignItems="center"
    >
        <Flex bg="rgb(140 125 234)" w="full" py="1" px="4" borderRadius="lg" fontSize="sm" color="white">
            <Box w="10%">Rank</Box>
            <Flex w="15%" gap={1} alignItems="center">
              <FaEthereum />
              <Box>Bid</Box>
            </Flex>
            <Box w="45%">Bidder</Box>
            <Box w="15%">Boxes</Box>
            <Box w="15%">Refund</Box>
        </Flex>
    </Flex>
  );
}

export default BucketAuctionSection;
