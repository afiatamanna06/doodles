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
      pt={["14", "28", "28"]}
      px={[4, 4, 4, 4, 0]}
      alignItems={["start"]}
    >
      <Accordion defaultIndex={[0]} allowMultiple width="full" pb={["24"]}>
        {resourcesData.map(({ title, data }) => (
          <AccordionItem
            key={title}
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
    </Flex>
  );
}

export default PuttResources;
