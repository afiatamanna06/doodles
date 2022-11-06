import { Box, Button, Center, Flex, Image, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { FiChevronDown } from "react-icons/fi"

function NavigationBar() {
  return (
    <Box w="full" px="4" py="2">
      <Center>
        <Flex maxW="80rem" w="full" justify="space-between" alignItems="center">
          <Flex>
            <Image src="/logo.png" w="1.8rem" h="2rem" alt="" />
          </Flex>
          <Flex display={["none", "none", "none", "flex", "flex"]} justify="center" w="full">
            <Flex flex="1" justify="center">
                <Menu size="sm">
                    <MenuButton as={Button} variant="ghost" rightIcon={<FiChevronDown />}>
                        Doodles
                    </MenuButton>
                    <MenuList color="rgb(140, 125, 234)">
                        <MenuItem>Browse</MenuItem>
                        <MenuItem>Dooplicator</MenuItem>
                        <MenuItem>Doodlebank</MenuItem>
                        <MenuItem>About</MenuItem>
                        <MenuItem>Docs</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
            <Flex flex="1" justify="center">
                <Menu size="sm">
                    <MenuButton as={Button} variant="ghost" rightIcon={<FiChevronDown />}>
                        Space Doodles
                    </MenuButton>
                    <MenuList color="rgb(140, 125, 234)">
                        <MenuItem>Space Port</MenuItem>
                        <MenuItem>Launch</MenuItem>
                        <MenuItem>About</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
            <Flex flex="1" justify="center">
                <Menu size="sm">
                    <MenuButton as={Button} variant="ghost" rightIcon={<FiChevronDown />}>
                        Doodles2
                    </MenuButton>
                    <MenuList color="rgb(140, 125, 234)">
                        <MenuItem>Genesis Box</MenuItem>
                        <MenuItem>Watch Trailer</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
            <Flex flex="1" justify="center">
                <Button variant="ghost">Shop</Button>
            </Flex>
            <Flex flex="1" justify="center">
                <Menu size="sm">
                    <MenuButton as={Button} variant="ghost" rightIcon={<FiChevronDown />}>
                        Events
                    </MenuButton>
                    <MenuList color="rgb(140, 125, 234)">
                        <MenuItem>SXSW 2022</MenuItem>
                        <MenuItem>NFT NYC 2022</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
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
