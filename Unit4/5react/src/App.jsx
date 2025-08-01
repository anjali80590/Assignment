// import AuthProvider from "./components/Practice/context/AuthContext";
// import Page from "./components/Practice/context/Page";
// import React from 'react';
// function App() {
//   return (
//     <div>
//       <AuthProvider>
//         <Page />
//       </AuthProvider>
//     </div>
//   );
// }
// export default App;
import React from 'react'
import P from './components/P'

function App() {
  return (
    <div><P/></div>
  )
}

export default App
// q11/App.jsx
// import { useState } from "react";
// import Top from "./components/Question11/Top";
// import { ChakraProvider, Box, Input } from "@chakra-ui/react";

// function App() {
//   const [name, setName] = useState("");

//   return (
//     <ChakraProvider>
//       <Box p="4">
//         <Input
//           placeholder="Enter your name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           mb="4"
//         />
//         <Top name={name} />
//       </Box>
//     </ChakraProvider>
//   );
// }

// export default App;
// App.jsx

// q12/App.jsx
// import { ChakraProvider, Box } from "@chakra-ui/react";
// import { ThemeProvider } from "./components/Question12/ThemeContext";
// import Header from "./components/Question12/Header";
// import Footer from "./components/Question12/Footer";
// import Main from "./components/Question12/Main";

// function App() {
//   return (
//     <ChakraProvider>
//       <ThemeProvider>
//         <Box minHeight="100vh" display="flex" flexDirection="column">
//           <Header />
//           <Box flex="1">
//             <Main />
//           </Box>
//           <Footer />
//         </Box>
//       </ThemeProvider>
//     </ChakraProvider>
//   );
// }

// export default App;

// q13/App.jsx
// import { ChakraProvider, Box } from "@chakra-ui/react";
// import { AuthProvider } from "./components/Question13/AuthContext";
// import Navbar from "./components/Question13/Navbar";
// import Main from "./components/Question13/Main";
// import Footer from "./components/Question13/Footer";

// function App() {
//   return (
//     <ChakraProvider>
//       <AuthProvider>
//         <Box minHeight="100vh" display="flex" flexDirection="column">
//           <Navbar />
//           <Box flex="1">
//             <Main />
//           </Box>
//           <Footer />
//         </Box>
//       </AuthProvider>
//     </ChakraProvider>
//   );
// }

// export default App;

// Question 14 App.jsx
// import { ChakraProvider, Box, Flex, Grid, Button } from "@chakra-ui/react";
// import { useContext } from "react";
// import { AuthContextProvider, AuthContext } from "./components/Question14/AuthContext";
// import { ThemeContextProvider, ThemeContext } from "./components/Question14/ThemeContext";

// const Navbar = () => {
//   const { isLoggedIn, toggleAuth } = useContext(AuthContext);
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <Flex
//       as="nav"
//       p="4"
//       bg={theme === "light" ? "gray.100" : "gray.700"}
//       justifyContent="space-between"
//     >
//       <Button onClick={toggleAuth}>{isLoggedIn ? "Log Out" : "Log In"}</Button>
//       <Button onClick={toggleTheme}>
//         Toggle to {theme === "light" ? "Dark" : "Light"} Theme
//       </Button>
//     </Flex>
//   );
// };

// const MainContent = () => {
//   const { theme } = useContext(ThemeContext);

//   return (
//     <Grid
//       templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
//       gap="4"
//       p="4"
//     >
//       {["Card 1", "Card 2", "Card 3"].map((card) => (
//         <Box
//           key={card}
//           p="4"
//           shadow="md"
//           bg={theme === "light" ? "gray.200" : "gray.600"}
//           color={theme === "light" ? "black" : "white"}
//         >
//           {card}
//         </Box>
//       ))}
//     </Grid>
//   );
// };

// const Footer = () => {
//   const { theme } = useContext(ThemeContext);

//   return (
//     <Box
//       as="footer"
//       p="4"
//       textAlign="center"
//       bg={theme === "light" ? "gray.300" : "gray.800"}
//       color={theme === "light" ? "black" : "white"}
//     >
//       Footer Content
//     </Box>
//   );
// };

// function App() {
//   return (
//     <ChakraProvider>
//       <AuthContextProvider>
//         <ThemeContextProvider>
//           <Navbar />
//           <MainContent />
//           <Footer />
//         </ThemeContextProvider>
//       </AuthContextProvider>
//     </ChakraProvider>
//   );
// }

// export default App;

// // q15/App.jsx
// import { ChakraProvider, Flex } from '@chakra-ui/react';
// import { AuthProvider } from '../components/Question15/AuthContext';
// import { ThemeProvider, ThemeContext } from '../components/Question15/ThemeContext';
// import Navbar from '../components/Question15/Navbar';
// import Sidebar from '../components/Question15/Sidebar';
// import MainContent from '../components/Question15/MainContent';
// import Footer from '../components/Question15/Footer';
// import { useContext } from 'react';

// const Layout = () => {
//   const { theme } = useContext(ThemeContext);

//   return (
//     <Flex direction="column" minHeight="100vh" bg={theme === 'light' ? 'gray.100' : 'gray.800'}>
//       <Navbar />
//       <Flex flex="1" direction={['column', 'row']}>
//         <Sidebar />
//         <MainContent />
//       </Flex>
//       <Footer />
//     </Flex>
//   );
// };

// export default function App() {
//   return (
//     <ChakraProvider>
//       <AuthProvider>
//         <ThemeProvider>
//           <Layout />
//         </ThemeProvider>
//       </AuthProvider>
//     </ChakraProvider>
//   );
// }
