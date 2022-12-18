import { Box, Center, Flex } from "@chakra-ui/react";
import DoodlePuttFacilitiesCard from "./DoodlePuttFacilitiesCard";
import { facilitiesData } from "./DoodlePuttFacilitiesData";

function DoodlePuttFacilities() {
  return (
    <Box
      w="full"
      bgImage="url('/putt_bottom_bg.png')"
      bgSize={["cover"]}
      position="relative"
      bgRepeat="no-repeat"
      px={["4", "4", "16", "0"]}
      py="6"
    >
      <Center>
        <Flex
          maxW="65rem"
          gap={5}
          direction="column"
          color="rgb(173, 153, 153)"
          w="full"
          pt={["7rem", "7rem", "8rem", "14rem"]}
          alignItems={["center"]}
        >
            <Flex direction={["column", "column", "column", "row", "row"]} gap={[12]}>
                {facilitiesData.map(({image, title, description}) => (
                    <DoodlePuttFacilitiesCard key={title} image={image} title={title} description={description} />
                ))}
            </Flex>
        </Flex>
      </Center>
    </Box>
  );
}

export default DoodlePuttFacilities;
