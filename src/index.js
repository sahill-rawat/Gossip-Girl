import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { AuthProvider } from "./Auth";
import CountProvider from "./CountProvider";
import StoreProvider from "./Store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <AuthProvider>
        <CountProvider>
          <StoreProvider>
            <App />
          </StoreProvider>
        </CountProvider>
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);
