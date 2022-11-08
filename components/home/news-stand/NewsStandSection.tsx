import { Box, Center, Flex, Grid, Image } from '@chakra-ui/react'
import NewsStandCard from './NewsStandCard'
import { newsStandData } from './NewsStandData'

function NewsStandSection() {
  return (
    <Box w="full" bg="#99E2FF" px="4" py="28">
      <Center>
        <Flex maxW="74rem" gap={5} direction={["column"]} color="white" w="full" alignItems={["center"]}>
            <Image src="/the-news-stand.png" w={["80%", "80%", "40%", "30%", "25%"]} h={["80%", "80%", "40%", "30%", "25%"]} alt="" />
            <Grid gap={4} mt="2" templateColumns={["repeat(1, minmax(18rem, 1fr))", "repeat(1, minmax(18rem, 1fr))", "repeat(2, minmax(18rem, 1fr))", "repeat(3, minmax(18rem, 1fr))", "repeat(4, minmax(18rem, 1fr))"]}>
                {newsStandData.map(({ path, image, title, date, source}) => (
                    <NewsStandCard key={title} path={path} image={image} date={date} title={title} source={source} />
                ))}
            </Grid>
        </Flex>
      </Center>
    </Box>
  )
}

export default NewsStandSection