import { Box, Button, Center, Flex, Image } from "@chakra-ui/react";
import React from "react";

function NavigationBar() {
  return (
    <Box w="full" px="4" py="2">
      <Center>
        <Flex maxW="80rem" w="full" justify="space-between" alignItems="center">
          <Flex>
            <Image src="/logo.png" w="1.8rem" h="2rem" alt="" />
          </Flex>
          <Button bg="#5086DC" size="sm" borderRadius="lg" px="4" h="1.5rem" color="white" _hover={{ bg: "#99E2FF" }}>
              connect
          </Button>
        </Flex>
      </Center>
    </Box>
  );
}

export default NavigationBar;
