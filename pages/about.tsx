import { Box, Center, Flex, Image } from "@chakra-ui/react";
import AboutCards from "../components/about/AboutCards";
import { aboutCardsData } from "../components/about/AboutCardsData";
import AboutDescription from "../components/about/AboutDescription";
import AboutHeader from "../components/about/AboutHeader";
import CloudMarquee from "../components/about/CloudMarquee";
import SpaceDoodles from "../components/about/space-doodles/SpaceDoodles";

function About() {
  return (
    <Flex direction="column" w="full" bgGradient="linear(180deg, #FFFFFF 70%, #99E2FF)">
      <AboutHeader />
      <AboutDescription />
      <Box w="full" px="6" pb="12">
        <Center>
          <Flex
            maxW="74rem"
            gap={[5, 5, 5, 100, 100]}
            direction={["column", "column", "column", "row", "row"]}
            w="full"
            alignItems={["start", "start", "center", "center", "center"]}
          >
            <Image
              display={["none", "none", "none", "flex", "flex"]}
              src="/pencil-drawing.png"
              w="70%"
              alt=""
            />
            <Image
              display={["flex", "flex", "flex", "none", "none"]}
              transform="scaleX(-1)"
              src="/pencil-drawing.png"
              w="100%"
              alt=""
            />
          </Flex>
        </Center>
      </Box>
      <SpaceDoodles />
      <Box w="full" px="4" py="8">
        <Center>
          <Flex
            maxW="74rem"
            h={["full", "full", "full"]}
            gap={[8]}
            direction={["column", "column", "column", "row", "row"]}
            w="full"
            alignItems={["center"]}
          >
            {aboutCardsData.map(
              ({
                image,
                titleImg,
                description,
                bg,
                link,
                path,
                titleImgH,
                titleImgW,
                imageH,
                imageW,
                target
              }) => (
                <AboutCards
                  key={description}
                  description={description}
                  bg={bg}
                  link={link}
                  path={path}
                  image={image}
                  titleImg={titleImg}
                  titleImgW={titleImgW}
                  titleImgH={titleImgH}
                  imageH={imageH}
                  imageW={imageW}
                  target={target}
                />
              )
            )}
          </Flex>
        </Center>
      </Box>
      <CloudMarquee />
    </Flex>
  );
}

export default About;
