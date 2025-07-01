
import { Box } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const Footer = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Box p="4" bg="gray.300" textAlign="center">
      {isLoggedIn ? "Welcome, User" : "Please log in"}
    </Box>
  );
};

export default Footer;
