import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
} from "@chakra-ui/react";
import { resourcesData } from "./PuttResourcesData";

function PuttResources() {
  return (
    <Flex
      direction="column"
      px={[4, 4, 4, 0, 0]}
      alignItems={["start"]}
    >
      <Accordion defaultIndex={[0]} allowMultiple width="full">
        {resourcesData.map(({ title, data }) => (
          <AccordionItem
            key={title}
            mb="2"
            borderRadius="lg"
          >
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
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
  );
}

export default PuttResources;
