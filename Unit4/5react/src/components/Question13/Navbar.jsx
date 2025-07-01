
import { Button, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const Navbar = () => {
  const { isLoggedIn, toggleLogin } = useContext(AuthContext);

  return (
    <Flex justify="flex-end" p="4" bg="gray.200">
      <Button onClick={toggleLogin}>{isLoggedIn ? "Logout" : "Login"}</Button>
    </Flex>
  );
};

export default Navbar;
