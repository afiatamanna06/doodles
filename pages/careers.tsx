import { Box, Flex, Image } from "@chakra-ui/react";

function Careers() {
  return (
    <Flex direction="column" position="relative" w="full">
      <Box
        bgGradient="linear(180deg, rgb(132 181 255), rgb(185 237 255))"
        minH={["full", "full", "full", "80vh"]}
      >
        <Image
          display={["none", "none", "none", "flex", "flex"]}
          src="/cover_careers.png"
          w={["100%"]}
          h={["92vh"]}
          objectFit="cover"
          position="absolute"
          zIndex={1}
          alt=""
        />
        <Image
          display={["flex", "flex", "flex", "none", "none"]}
          src="/cover_careers_mobile.png"
          w={["100%"]}
          objectFit="cover"
          position="absolute"
          zIndex={1}
          alt=""
        />
      </Box>
      <Box bg="white">
        <Flex
          justify={["start", "start", "center", "center", "center"]}
          w="full"
        >
          <Flex
            direction={["column", "column", "column", "row", "row"]}
            maxW="60rem"
            pt={["14", "28", "28"]}
            w="full"
            color="black"
            px={[4, 4, 4, 4, 0]}
            alignItems={["start"]}
          >
              
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Careers;
