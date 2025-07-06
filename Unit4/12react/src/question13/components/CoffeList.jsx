import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoffee } from "../redux/actions";
import { Box, Select, SimpleGrid, Image, Text } from "@chakra-ui/react";

function CoffeeList() {
  const dispatch = useDispatch();
  const { coffees, isLoading, isError } = useSelector((state) => state);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    dispatch(getCoffee(sortOrder));
  }, [sortOrder]);

  return (
    <Box p="4">
      <Select
        w="200px"
        mb="4"
        placeholder="Sort by Price"
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>

      {isLoading ? (
        <Text>Loading...</Text>
      ) : isError ? (
        <Text color="red">Error fetching data.</Text>
      ) : (
        <SimpleGrid columns={[1, 2, 3]} spacing="4">
          {coffees.map((coffee) => (
            <Box
              key={coffee.id}
              border="1px solid #ccc"
              borderRadius="8px"
              p="4"
              boxShadow="md"
              textAlign="center"
            >
              <Image
                src={coffee.image}
                alt={coffee.title}
                h="200px"
                w="100%"
                objectFit="cover"
              />
              <Text fontWeight="bold">{coffee.title}</Text>
              <Text>Price: ₹{coffee.price}</Text>
              <Text>Type: {coffee.type}</Text>
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
}

export default CoffeeList;
