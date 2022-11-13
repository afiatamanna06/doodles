import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Collapse, Flex, useDisclosure } from "@chakra-ui/react";

function NavigationBarDrawer() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Flex justify="center">
      <Flex direction="column">
        <Box>
          <Accordion allowToggle>
            <AccordionItem border="0px">

                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Section 1 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              <AccordionPanel pb={4}>
                Browse
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem border="0px">
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Section 2 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              <AccordionPanel pb={4}>
                Browse
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Flex>
    </Flex>
  );
}

export default NavigationBarDrawer;
