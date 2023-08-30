import "../App.css";
import { io } from "socket.io-client";
import { useState, useEffect } from "react";
import { Button, Input, Stack } from "@chakra-ui/react";
import BoxChat from "./BoxChat";
import { ArrowUpIcon } from "@chakra-ui/icons";

interface Message {
  content: string;
}

const socket = io("http://localhost:4000");

export default function FormChat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newMessage = {
      body: message,
      from: "Me",
    };
    setMessages([...messages, newMessage]);
    socket.emit("message", message);
  };

  useEffect(() => {
    socket.on("message", receiveMessage);

    return () => {
      socket.off("message", receiveMessage);
    };
  }, []);

  const receiveMessage = (receivedMessage: Message) => {
    setMessages((prevMessages) => [...prevMessages, receivedMessage]);
  };

  return (
    <>
      <BoxChat messages={messages} />
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          fontSize="2xl"
          placeholder="INGRESAR MENSAJE"
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          type="submit"
          fontSize="2xl"
          rounded={"none"}
          size={"lg"}
          w={"full"}
          mt={"7"}
          _hover={{ boxShadow: "lg" }}
        >
          Enviar <ArrowUpIcon ml={'2'} pt={'1'} fontSize="3xl"/>
        </Button>
      </form>
    </>
  );
}
