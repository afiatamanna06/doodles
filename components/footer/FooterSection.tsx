import { Box, Button, Center, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { footerLinks } from "./FooterLinks";
import { FaDiscord } from "react-icons/fa"

function FooterSection() {
  return (
    <Flex justify={["start", "start", "start", "center", "center"]} w="full" bg="#FFA4D4" px={["6", "6", "16", "0", "0"]} py={["12", "12", "24", "8", "8"]}>
        <Flex
          maxW="74rem"
          gap={5}
          direction={["column"]}
          color="white"
          w="full"
          alignItems={["start", "start", "start", "center", "center"]}
        >
          <Flex
            direction={["column", "column", "column", "row", "row"]}
            gap={[8, 8, 8, 20, 20]}
            w="full"
          >
            {footerLinks.slice(0, 3).map(({ title, links }) => (
              <Flex key={title} direction="column">
                <Box fontWeight="bold" fontSize="lg">{title}</Box>
                {links.map(({ path, name }) => (
                  <Link key={path} href={path} passHref>
                    <Box>{name}</Box>
                  </Link>
                ))}
              </Flex>
            ))}
            <Link href="/" passHref>
              <Box fontWeight="bold" fontSize="lg">Shop</Box>
            </Link>
            {footerLinks.slice(3, 5).map(({ title, links }) => (
              <Flex key={title} direction="column">
                <Box fontWeight="bold" fontSize="lg">{title}</Box>
                {links.map(({ path, name }) => (
                  <Link key={path} href={path} passHref>
                    <Box>{name}</Box>
                  </Link>
                ))}
              </Flex>
            ))}
            <Flex gap={2} justify={["space-between", "space-between", "space-between", "flex-start", "flex-start"]} direction={["row", "row", "row", "column", "column"]}>
              <Box fontWeight="bold" fontSize="lg">Chat with Doodles</Box>
              <Box>
                <Button size="sm" w="min-content" border="2px" borderBottomWidth="4px" color="#6681c5" borderColor="#6681c5" borderRadius="lg">
                  <Flex gap={2} alignItems="center">
                      <FaDiscord size={18} />
                      <Box fontSize="sm">join discord</Box>
                  </Flex>
                </Button>
              </Box>
            </Flex>
          </Flex>
        </Flex>
    </Flex>
  );
}

export default FooterSection;
