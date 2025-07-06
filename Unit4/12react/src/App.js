// import React from "react";
// import CoffeeList from "./question13/components/CoffeList";
// import { Box, Heading } from "@chakra-ui/react";

// function App() {
//   return (
//     <Box>
//       <Heading textAlign="center" my="6">
//         ☕ Coffee Shop
//       </Heading>
//       <CoffeeList />
//     </Box>
//   );
// }

// export default App;


// question 14 
import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Login from "./question14/components/Login";
import Quiz from "./question14/components/Quiz";

function App() {
  const token = useSelector((state) => state.auth.token);
  return (
    <ChakraProvider>
      <Box p="4">{token ? <Quiz /> : <Login />}</Box>
    </ChakraProvider>
  );
}

export default App;
