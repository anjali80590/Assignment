import { Box } from "@chakra-ui/react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Box
      as="footer"
      p="4"
      textAlign="center"
      bg={theme === "light" ? "gray.300" : "gray.700"}
      color={theme === "light" ? "black" : "white"}
    >
      Dashboard Footer
    </Box>
  );
};

export default Footer;
