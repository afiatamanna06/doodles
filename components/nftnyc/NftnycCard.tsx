import { Box, Flex, ListItem, UnorderedList } from "@chakra-ui/react"

interface propTypes {
    date: string;
    name: string;
    location: string;
    events: string[];
}

function NftnycCard({date, name, location, events}: propTypes) {
  return (
    <Flex direction="column" flex="1">
        <Box>{date}</Box>
        <Box fontSize="xl">{name}</Box>
        <Box>{location}</Box>
        <UnorderedList>
            {events.map((item) => (
                <ListItem key={item}>{item}</ListItem>
            ))}
        </UnorderedList>
    </Flex>
  )
}

export default NftnycCard