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
        px="4"
        borderRadius="lg"
        fontSize="sm"
        color="white"
      >
        <Box w="10%">Rank</Box>
        <Flex w="15%" gap={1} alignItems="center">
          <FaEthereum />
          <Box>Bid</Box>
        </Flex>
        <Box w="45%">Bidder</Box>
        <Box w="15%">Boxes</Box>
        <Box w="15%">Refund</Box>
      </Flex>
      {bucketData.map(({bid, bidder, boxes, refund}, idx) => (
        <Flex
          key={bid}
          bg="rgba(255, 255, 255, 0.55)"
          color="rgb(0 0 0 / 61%)"
          w="full"
          py="1"
          px="4"
          borderRadius="lg"
          fontSize="sm"
        >
          <Box w="10%">{idx+1}</Box>
          <Flex w="15%" gap={1} alignItems="center">
            <Box>{bid}</Box>
          </Flex>
          <Box w="45%">{bidder}</Box>
          <Box w="15%" color="rgb(115 244 194)"><Box px="2" bg="#fafafa" rounded="full" w="min-content">{boxes}</Box></Box>
          <Box w="15%">{refund}</Box>
        </Flex>
      ))}
    </Flex>
  );
}

export default BucketAuctionSection;
