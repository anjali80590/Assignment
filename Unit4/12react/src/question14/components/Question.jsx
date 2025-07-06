import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { ANSWER_QUESTION, SKIP_QUESTION } from "../redux/actionTypes";

export default function Question() {
  const dispatch = useDispatch();
  const { questions, currentIndex } = useSelector((state) => state.quiz);
  const q = questions[currentIndex];

  if (!q) return <Text>No more questions</Text>;

  return (
    <Box>
      <Text fontSize="xl">{q.question}</Text>
      <Box mt="4">
        {q.options.map((opt, i) => (
          <Button
            key={i}
            m="2"
            onClick={() =>
              dispatch({
                type: ANSWER_QUESTION,
                payload: { correct: opt === q.correct_answer },
              })
            }
          >
            {opt}
          </Button>
        ))}
        <Button
          mt="4"
          colorScheme="gray"
          onClick={() => dispatch({ type: SKIP_QUESTION })}
        >
          Skip
        </Button>
      </Box>
    </Box>
  );
}
