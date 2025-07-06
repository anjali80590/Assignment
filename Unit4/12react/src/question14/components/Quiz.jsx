import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Question from "./Question";
import Result from "./Result";

export default function Quiz() {
  const { questions, currentIndex } = useSelector((state) => state.quiz);
  return (
    <Box>{currentIndex < questions.length ? <Question /> : <Result />}</Box>
  );
}
