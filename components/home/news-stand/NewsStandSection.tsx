import { Box, Center, Flex, Grid, Image } from '@chakra-ui/react'
import SignUpInput from '../SignUpInput'
import NewsStandCard from './NewsStandCard'
import { newsStandData } from './NewsStandData'

function NewsStandSection() {
  return (
    <Box w="full" bg="#99E2FF" px="4" py="28">
      <Center>
        <Flex maxW="74rem" gap={5} direction={["column"]} color="white" w="full" alignItems={["center"]}>
            <Image src="/the-news-stand.png" w={["80%", "80%", "40%", "30%", "25%"]} h={["80%", "80%", "40%", "30%", "25%"]} alt="" />
            <Grid gap={4} mt="3" templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, minmax(18rem, 1fr))", "repeat(3, minmax(18rem, 1fr))", "repeat(4, minmax(18rem, 1fr))"]}>
                {newsStandData.map(({ path, image, title, date, source}) => (
                    <NewsStandCard key={title} path={path} image={image} date={date} title={title} source={source} />
                ))}
            </Grid>
            <Flex direction={["column", "column", "column", "row", "row"]} gap={[0, 0, 0, 2]} textShadow="0px 2px 0px #80b1ff" fontSize="2xl" textAlign="center">
                <Box>Get Doodles news</Box>
                <Box> delivered to your inbox</Box>
            </Flex>
            <SignUpInput />
        </Flex>
      </Center>
    </Box>
  )
}

export default NewsStandSection