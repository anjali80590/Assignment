import React, { useState } from "react";
import { Box, Input, Button, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_QUESTIONS_REQUEST,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE,
} from "../redux/actionTypes";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleLogin = async () => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const res = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });

      dispatch({ type: FETCH_QUESTIONS_REQUEST });
      const qres = await axios.get(
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz"
      );
      dispatch({ type: FETCH_QUESTIONS_SUCCESS, payload: qres.data.data });
    } catch (err) {
      dispatch({
        type: err.response?.data?.error || LOGIN_FAILURE,
        payload: err.response?.data?.error || "Login failed",
      });
    }
  };

  return (
    <Box maxW="300px" mx="auto" mt="20">
      <Input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        mt="2"
      />
      <Button
        colorScheme="teal"
        mt="4"
        onClick={handleLogin}
        isLoading={auth.loading}
      >
        Login
      </Button>
      {auth.error && <Text color="red.500">{auth.error}</Text>}
    </Box>
  );
}
