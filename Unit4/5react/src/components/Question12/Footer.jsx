
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { Box } from "@chakra-ui/react";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Box
      p="4"
      textAlign="center"
      bg={theme === "light" ? "gray.300" : "gray.800"}
      color={theme === "light" ? "black" : "white"}
    >
      Footer using {theme} theme
    </Box>
  );
};

export default Footer;
