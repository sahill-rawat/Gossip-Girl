import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { AuthProvider } from "./Auth";
import CountProvider from "./CountProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <AuthProvider>
        <CountProvider>
          <App />
        </CountProvider>
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);
