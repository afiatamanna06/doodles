import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import NavigationBarDrawer from "./NavigationBarDrawer";
import { navigationLinks } from "./NavigationLinks";

function NavigationBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      w="full"
      position="relative"
      zIndex={99}
      px="4"
      py="2"
      borderBottom="1px"
      borderColor="blackAlpha.400"
    >
      <Center>
        <Flex maxW="74rem" w="full" justify="space-between" alignItems="center">
          <Flex alignItems="center">
            <Link href="/" passHref>
              <Image src="/logo.png" w="1.8rem" h="2rem" alt="" />
            </Link>
            <Box
              p="2"
              display={["block", "block", "block", "none", "none"]}
              onClick={onOpen}
              cursor="pointer"
            >
              <FiMenu color="black" size={22} />
            </Box>
            <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay
                display={["block", "block", "block", "none", "none"]}
              />
              <DrawerContent
                display={["block", "block", "block", "none", "none"]}
                borderTopRadius="xl"
              >
                <DrawerHeader>
                  <NavigationBarDrawer onDrawerClose={onClose} />
                </DrawerHeader>
                <DrawerFooter borderTopWidth="1px">
                  <Flex justify="center" w="full" onClick={onClose}>
                    <IoClose size={40} color="#D1B6B6" />
                  </Flex>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </Flex>
          <Flex
            display={["none", "none", "none", "flex", "flex"]}
            justify="center"
            w="full"
          >
            {navigationLinks.slice(0, 3).map(({ title, links }) => (
              <Flex key={title} flex="1" justify="center">
                <Menu size="sm">
                  <MenuButton
                    as={Button}
                    variant="ghost"
                    fontSize="xl"
                    rightIcon={<FiChevronDown />}
                  >
                    {title}
                  </MenuButton>
                  <MenuList
                    color="rgb(140, 125, 234)"
                    boxShadow="dark-lg"
                    borderRadius="xl"
                    zIndex={99}
                  >
                    {links.map(({ path, name, target }) => (
                      <Link
                        key={path}
                        href={path}
                        target={target ? "_blank" : "_self"}
                        passHref
                      >
                        <MenuItem>{name}</MenuItem>
                      </Link>
                    ))}
                  </MenuList>
                </Menu>
              </Flex>
            ))}
            <Flex flex="1" justify="center">
              <Link
                href="https://shop.doodles.app/password"
                target="_blank"
                passHref
              >
                <Button variant="ghost" fontSize="xl">
                  Shop
                </Button>
              </Link>
            </Flex>
            {navigationLinks.slice(3, 5).map(({ title, links }) => (
              <Flex key={title} flex="1" justify="center">
                <Menu size="sm">
                  <MenuButton
                    as={Button}
                    variant="ghost"
                    fontSize="xl"
                    rightIcon={<FiChevronDown />}
                  >
                    {title}
                  </MenuButton>
                  <MenuList
                    color="rgb(140, 125, 234)"
                    boxShadow="dark-lg"
                    borderRadius="xl"
                    zIndex={99}
                  >
                    {links.map(({ path, name, target }) => (
                      <Link
                        key={path}
                        href={path}
                        target={target ? "_blank" : "_self"}
                        passHref
                      >
                        <MenuItem>{name}</MenuItem>
                      </Link>
                    ))}
                  </MenuList>
                </Menu>
              </Flex>
            ))}
          </Flex>
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
      </Center>
    </Box>
  );
}

export default NavigationBar;
