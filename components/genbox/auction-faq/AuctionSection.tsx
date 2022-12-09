import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Image } from "@chakra-ui/react";
import { auctionData } from "./auctionData";

function AuctionSection() {
  return (
    <Box bg="rgb(242 231 234)">
      <Flex justify={["start", "start", "center", "center", "center"]} w="full">
        <Flex
          direction="column"
          maxW="50rem"
          pt={["14", "28", "28"]}
          pb="12"
          w="full"
          color="black"
          px={[4, 4, 4, 4, 0]}
          alignItems={["start"]}
        >
          <Image src="/FAQ_header.png" mb="6" w={["95%", "95%", "55%", "35%"]} alt="" />
          <Accordion defaultIndex={[0]} allowMultiple width="full">
            {auctionData.map(({ title, data }) => (
              <AccordionItem key={title} background="#fafafa" mb="2" borderRadius="lg">
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
        </Flex>
      </Flex>
    </Box>
  );
}

export default AuctionSection;
