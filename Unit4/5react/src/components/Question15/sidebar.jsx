import { Box, useMediaQuery } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { ThemeContext } from "./ThemeContext";

const Sidebar = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const { isLoggedIn } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  if (!isLargerThan768) return null;

  return (
    <Box
      w="200px"
      p="4"
      bg={theme === "light" ? "gray.300" : "gray.600"}
      color={theme === "light" ? "black" : "white"}
    >
      {isLoggedIn ? "Welcome, User!" : "Please log in."}
    </Box>
  );
};

export default Sidebar;
