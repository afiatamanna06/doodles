import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Image,
} from "@chakra-ui/react";
import { auctionData } from "./auctionData";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function AuctionSection() {
  return (
    <Box bg="rgb(242 231 234)">
      <Flex justify={["start", "start", "center", "center", "center"]} w="full">
        <Flex
          direction="column"
          maxW="50rem"
          pt={["14", "28", "28"]}
          w="full"
          color="black"
          px={[4, 4, 4, 4, 0]}
          alignItems={["start"]}
        >
          <Image
            src="/FAQ_header.png"
            mb="6"
            w={["95%", "95%", "55%", "35%"]}
            alt=""
          />
          <Accordion defaultIndex={[0]} allowMultiple width="full" pb={["24", "24", "24", "28"]}>
            {auctionData.map(({ title, data }) => (
              <AccordionItem
                key={title}
                background="#fafafa"
                mb="2"
                borderRadius="lg"
              >
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontWeight="semibold">
                      {title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fontWeight="thin">
                  {data}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
          <Flex
            gap={[4]}
            direction={["column", "column", "column", "row"]}
            alignItems={["start"]}
            w="full"
          >
            <Flex
              direction="column"
              p="3"
              w="full"
              position="relative"
              color="white"
              bg="rgb(154 199 250)"
              borderRadius="xl"
              alignItems="center"
            >
              <Image src="/auction-box-header.png" w={["60%", "60%", "50%", "40%"]} position="absolute" top={[-8, -8, -12, -14]} left={["20%", "20%", "25%", "30%"]} zIndex={1} alt="" />
              <Box fontSize="xl">the auction has ended</Box>
              <Box fontSize="sm" mb="4">no new bids will be accepted</Box>
              <Button
                as={ConnectButton}
                label="connect"
                bg="#5086DC"
                size="sm"
                borderRadius="lg"
                px="4"
                h="1.5rem"
                color="white"
                _hover={{ bg: "#99E2FF", boxShadow: "dark-lg" }}
              ></Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default AuctionSection;
