import { Box, Center, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
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
          gap={12}
          direction="column"
          color="rgb(173, 153, 153)"
          w="full"
          pt={["7rem", "7rem", "8rem", "14rem"]}
          alignItems={["center"]}
        >
          <Flex
            direction={["column", "column", "column", "row", "row"]}
            gap={[12]}
          >
            {facilitiesData.map(({ image, title, description }) => (
              <DoodlePuttFacilitiesCard
                key={title}
                image={image}
                title={title}
                description={description}
              />
            ))}
          </Flex>
          <Flex
            direction={["column", "column", "row", "row", "row"]}
            justify="space-between"
            alignItems="center"
            gap={[6, 6, 6, 14]}
          >
            <Flex w="45%" display={["flex", "flex", "none", "none", "none"]}>
              <Link href="https://mobile.twitter.com/juicykatbae" passHref>
                <Image src="/juicykatbae.png" w="100%" alt="" />
              </Link>
            </Flex>
            <Box>
              <Box
                fontWeight="semibold"
                textAlign={["center", "center", "start", "start"]}
              >
                On-location livestream hosted by JuicyKatBae
              </Box>
              <Box textAlign={["center", "center", "start", "start"]}>
                JuicyKatBae is comprised of three OG Doodle holders who met on
                the Blockchain: Julia, Kat Sammy. Despite their geographical
                distance apart, the trio is united through their love of the
                Doodles community and fascination with all things Web3.
              </Box>
              <br />
              <Box textAlign={["center", "center", "start", "start"]}>
                &quot;JKB&quot; hosts weekly Twitter Spaces, “JuicyKatBae Talk
                About Nothing” on Tuesdays at 8pm ET.
              </Box>
            </Box>
            <Flex display={["none", "none", "flex", "flex", "flex"]}>
              <Link href="https://mobile.twitter.com/juicykatbae" passHref>
                <Image src="/juicykatbae.png" w="100%" alt="" />
              </Link>
            </Flex>
          </Flex>
          <Image
            display={["none", "none", "flex", "flex", "flex"]}
            src="/putt_rainbow_bar.png"
            w="100%"
            alt=""
          />
        </Flex>
      </Center>
    </Box>
  );
}

export default DoodlePuttFacilities;
