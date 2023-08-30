import { List, ListItem, Stack } from "@chakra-ui/react";

export default function BoxChat({ messages }) {
  return (
    <Stack
      p={"2"}
      mb={"4"}
      border={"2px"}
      borderColor={"gray.600"}
      h={"96"}
      overflowY="auto"
    >
      <List spacing={3}>
        {messages.map((message, index) => (
          <ListItem fontSize="2xl" key={index}>
            {message.from} : {message.body}
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
