import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import theme from "./theme/theme";
// import { Router } from "./router/Router";
import { Router2 } from "./router/Router2";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router2 />
      </BrowserRouter>
    </ChakraProvider>
  );
}
