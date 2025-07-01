
import { Flex, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { ThemeContext } from "./ThemeContext";

const Navbar = () => {
  const { isLoggedIn, toggleLogin } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Flex
      justify="space-between"
      p="4"
      bg={theme === "light" ? "gray.200" : "gray.700"}
    >
      <Button onClick={toggleLogin}>{isLoggedIn ? "Logout" : "Login"}</Button>
      <Button onClick={toggleTheme}>
        Toggle to {theme === "light" ? "Dark" : "Light"} Theme
      </Button>
    </Flex>
  );
};

export default Navbar;
