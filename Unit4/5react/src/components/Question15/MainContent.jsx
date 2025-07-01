import { Grid, Box } from "@chakra-ui/react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const MainContent = () => {
  const { theme } = useContext(ThemeContext);

  const cards = ["Product 1", "Product 2", "Product 3", "Product 4"];

  return (
    <Grid
      templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
      gap="4"
      p="4"
      flex="1"
    >
      {cards.map((item, idx) => (
        <Box
          key={idx}
          p="6"
          borderRadius="md"
          bg={theme === "light" ? "white" : "gray.700"}
          color={theme === "light" ? "black" : "white"}
          shadow="md"
        >
          {item}
        </Box>
      ))}
    </Grid>
  );
};

export default MainContent;
