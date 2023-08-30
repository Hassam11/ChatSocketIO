import {
  Container,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Header() {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 10, md: 10 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Chat en{" "}
          <Text as={"span"} color={"orange.400"}>
            vivo
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          Chat en vivo, proyecto hecho con Socket io, TypeScript, React y
          Express
        </Text>
      </Stack>
    </Container>
  );
}
