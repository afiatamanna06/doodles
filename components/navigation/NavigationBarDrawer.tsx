import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Collapse,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { navigationLinks } from "./NavigationLinks";

interface propTypes {
  onDrawerClose: any;
}

function NavigationBarDrawer({ onDrawerClose }: propTypes) {
  return (
    <Flex justify="center">
      <Flex direction="column" alignItems="center">
        <Accordion allowToggle>
          {navigationLinks.slice(0, 3).map(({ title, links }) => (
            <AccordionItem border="0px" key={title}>
              <Flex direction="column" alignItems="center">
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight="bold"
                    fontSize="lg"
                  >
                    {title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  {links.map(({ path, name, target }) => (
                    <Link
                      key={path}
                      href={path}
                      target={target ? "_blank" : "_self"}
                      passHref
                    >
                      <Box
                        textAlign="center"
                        onClick={onDrawerClose}
                        color="#6681c5"
                      >
                        {name}
                      </Box>
                    </Link>
                  ))}
                </AccordionPanel>
              </Flex>
            </AccordionItem>
          ))}
          <Link
            href="https://shop.doodles.app/password"
            target="_blank"
            passHref
          >
            <Box
              fontWeight="bold"
              textAlign="center"
              onClick={onDrawerClose}
              fontSize="lg"
            >
              Shop
            </Box>
          </Link>
          {navigationLinks.slice(3, 5).map(({ title, links }) => (
            <AccordionItem border="0px" key={title}>
              <Flex direction="column" alignItems="center">
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight="bold"
                    fontSize="lg"
                  >
                    {title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  {links.map(({ path, name, target }) => (
                    <Link
                      key={path}
                      href={path}
                      target={target ? "_blank" : "_self"}
                      passHref
                    >
                      <Box
                        textAlign="center"
                        onClick={onDrawerClose}
                        color="#6681c5"
                      >
                        {name}
                      </Box>
                    </Link>
                  ))}
                </AccordionPanel>
              </Flex>
            </AccordionItem>
          ))}
        </Accordion>
      </Flex>
    </Flex>
  );
}

export default NavigationBarDrawer;
