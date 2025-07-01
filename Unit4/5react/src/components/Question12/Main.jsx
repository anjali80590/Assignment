
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { Box } from "@chakra-ui/react";

const Main = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Box
      p="6"
      minHeight="200px"
      bg={theme === "light" ? "gray.200" : "gray.600"}
      color={theme === "light" ? "black" : "white"}
    >
      This is the main content area using {theme} theme.
    </Box>
  );
};

export default Main;
