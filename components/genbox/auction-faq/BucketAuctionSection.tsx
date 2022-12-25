import { Box, Flex } from "@chakra-ui/react";
import { FaEthereum } from "react-icons/fa";
import { bucketData } from "./bucketData";

function BucketAuctionSection() {
  return (
    <Flex
      direction="column"
      w={["full", "full", "full", "60%"]}
      position="relative"
      alignItems="center"
      gap={1}
    >
      <Flex
        bg="rgb(140 125 234)"
        w="full"
        py="1"
        alignItems="start"
        px={["1", "1", "4", "4"]}
        borderRadius="lg"
        fontSize="sm"
        color="white"
      >
        <Box w={["10%", "10%", "10%", "10%"]}>Rank</Box>
        <Flex w={["15%", "15%", "15%", "15%"]} gap={1} alignItems="center">
          <FaEthereum />
          <Box>Bid</Box>
        </Flex>
        <Box w={["45%", "45%", "45%", "45%"]}>Bidder</Box>
        <Box w={["15%", "15%", "15%", "15%"]}>Boxes</Box>
        <Box w={["15%", "15%", "15%", "15%"]}>Refund</Box>
      </Flex>
      {bucketData.map(({ bid, bidder, boxes, refund }, idx) => (
        <Flex
          key={bid}
          bg="rgba(255, 255, 255, 0.55)"
          color="rgb(0 0 0 / 61%)"
          w="full"
          py="1"
          px={["1", "1", "4", "4"]}
          alignItems="start"
          borderRadius="lg"
          fontSize="sm"
        >
          <Box w="10%" overflow="hidden">
            {idx + 1}
          </Box>
          <Flex w="15%" gap={1} overflow="hidden">
            <Box>{bid}</Box>
          </Flex>
          <Box w="45%" overflow="hidden">
            {bidder}
          </Box>
          <Box w="15%" color="rgb(115 244 194)">
            <Box
              px="2"
              bg="#fafafa"
              rounded="full"
              w="min-content"
              overflow="hidden"
            >
              {boxes}
            </Box>
          </Box>
          <Box w="15%" overflow="hidden">
            {refund}
          </Box>
        </Flex>
      ))}
      <Flex direction="column" w="full" h="100%" position="relative" gap={1}>
        <Flex
          bg="rgb(154 199 250)"
          w="full"
          py="1"
          justify="center"
          borderRadius="lg"
          fontSize="sm"
          color="white"
        >
          + 4346 more bids winning
        </Flex>
        <Box bg="rgb(140 125 234)" w="full" rounded="full" h=".2rem"></Box>
        <Flex
          direction="column"
          fontSize="xs"
          fontWeight="bold"
          top={["32%", "32%", "13%", "13%"]}
          left="3%"
          color="white"
          borderRadius={["lg", "lg", "xl", "xl"]}
          p={["1", "1", "2", "2"]}
          position="absolute"
          bg="rgb(140 125 234)"
        >
          <Box display={["none", "none", "flex", "flex", "flex"]}>
            Current Price:
          </Box>
          <Box>0.508 ETH</Box>
        </Flex>
        <Flex
          bg="rgb(255 164 212)"
          w="full"
          py="1"
          justify="center"
          borderRadius="lg"
          fontSize="sm"
          color="white"
        >
          2172 not winning
        </Flex>
      </Flex>
    </Flex>
  );
}

export default BucketAuctionSection;
