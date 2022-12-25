import { Box, Flex, Image } from "@chakra-ui/react";

interface propTypes {
  image: string;
  id: number;
  title: string;
}

function CourseCard({ image, id, title }: propTypes) {
  return (
    <Flex
      direction="column"
      borderTopLeftRadius={id === 1 ? "lg" : "none"}
      borderBottomLeftRadius={
        (id === 1 && ["", "", "lg", "lg"]) ||
        (id === 7 && ["lg", "lg", "", ""]) ||
        "none"
      }
      borderTopRightRadius={
        (id === 9 && ["", "", "lg", "lg"]) ||
        (id === 3 && ["lg", "lg", "", ""]) ||
        "none"
      }
      borderBottomRightRadius={id === 9 ? "lg" : "none"}
      alignItems="center"
      color="#6dd1a1"
      bg="#ffffff"
    >
      <Image
        src={image}
        borderTopLeftRadius={id === 1 ? "lg" : "none"}
        borderTopRightRadius={
          (id === 9 && ["", "", "lg", "lg"]) ||
          (id === 3 && ["lg", "lg", "", ""]) ||
          "none"
        }
        objectFit="cover"
        h="14rem"
        w="full"
        alt=""
      />
      <Box fontSize="lg">{id}</Box>
      <Box fontSize="sm" pb="2" textAlign="center">
        {title}
      </Box>
    </Flex>
  );
}

export default CourseCard;
