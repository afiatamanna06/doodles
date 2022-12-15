import { Box, Flex, Image } from "@chakra-ui/react";

function Careers() {
  return (
    <Flex direction="column" position="relative" w="full">
      <Box
        bgGradient="linear(180deg, rgb(132 181 255), rgb(185 237 255))"
        minH={["full", "full", "full", "85vh"]}
        position="relative"
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
      <Box bg="white" position="relative">
        <Flex
          justify={["start", "start", "center", "center", "center"]}
          w="full"
        >
          <Flex
            direction={["column", "column", "column", "row", "row"]}
            maxW="65rem"
            mt={["40", "40", "80", "40"]}
            pt={["16", "28", "40", "0"]}
            w="full"
            color="rgb(49 58 113)"
            px={[4, 4, 4, 4, 0]}
            alignItems={["start"]}
          >
            <Flex direction="column" flex="1" gap={8} fontSize="lg">
              <Image
                src="/text_work-on-team.png"
                w={["90%", "90%", "80%", "80%"]}
                alt=""
              />
              <Box mt="4">
                Doodles is here to inspire belief in the idea that anything is
                possible with the power of our imagination. Doodling can lead to
                some of life&apos;s most meaningful moments. It can transport us
                to completely new realities. Our goal is to channel that energy
                into our work every single day.
              </Box>
              <Box>
                Through web3 technology and universally loved art, Doodles has
                redefined what it means to be a world-class brand. We are
                seeking exceptional people to help us innovate, create and
                develop extraordinary products, experiences and stories.
              </Box>
              <Box fontWeight="semibold">There are currently 9 open positions</Box>
            </Flex>
            <Flex direction="column" flex="1" gap={8}>
              <Box>Finance & Operations</Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Careers;
