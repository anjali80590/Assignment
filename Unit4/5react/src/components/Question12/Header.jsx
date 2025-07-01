
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { Box, Button } from "@chakra-ui/react";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Box p="4" bg={theme === "light" ? "gray.100" : "gray.700"}>
      <Button onClick={toggleTheme}>
        Toggle to {theme === "light" ? "Dark" : "Light"} Theme
      </Button>
    </Box>
  );
};

export default Header;
