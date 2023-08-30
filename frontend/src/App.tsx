import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import FormChat from "./components/FormChat";
import ThemeButton from "./components/ThemeButton";

function App() {
  return (
    <ChakraProvider>
      <ThemeButton />
      <Header />
      <FormChat />
    </ChakraProvider>
  );
}

export default App;
