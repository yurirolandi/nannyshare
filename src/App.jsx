import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./assets/styles.js/styles";
import Home from "./pages/Home";
import "react-toastify/dist/ReactToastify.css";
import "./assets/styles/global.scss";

function App() {
  return (
    <ChakraProvider props={theme}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
