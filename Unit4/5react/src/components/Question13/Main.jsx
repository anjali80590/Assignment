
import { Box } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const Main = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Box p="6" fontSize="xl">
      {isLoggedIn ? "You are logged in!" : "Please log in to continue."}
    </Box>
  );
};

export default Main;









































