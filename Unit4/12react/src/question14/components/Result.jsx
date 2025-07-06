import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function Result() {
  const { score, questions } = useSelector((state) => state.quiz);
  return (
    <Box textAlign="center" mt="20">
      <Text fontSize="2xl">
        Your Score: {score} / {questions.length}
      </Text>
    </Box>
  );
}
