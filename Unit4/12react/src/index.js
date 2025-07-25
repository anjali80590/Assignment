import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
// import { store } from "./question13/redux/store";
import { store } from "./question14/redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    {" "}
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>
);
