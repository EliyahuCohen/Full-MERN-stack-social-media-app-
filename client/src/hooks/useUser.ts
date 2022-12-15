import { useRef } from "react";
import axios, { Axios } from "axios";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

export const useUser = () => {
  const dispatch = useDispatch();
  const baseUrl = "http://localhost:3001/";
  const loginFunction = async (
    email: string,
    password: string,
    setError: any
  ) => {
    try {
      const response = await axios.post(baseUrl + "login", {
        email,
        password,
      });
      dispatch(
        login({
          user: response.data.user,
          token: response.data.token,
        })
      );
      console.log("hey");
      console.log(response.data);
      console.log("hey");
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };
  const signupFunction = async (
    setError: any,
    email: string,
    password: string,
    image?: string | null | undefined
  ) => {
    try {
      const response = await axios.post(baseUrl + "signup", {
        email,
        password,
        image,
      });
      dispatch(
        login({
          user: response.data.user,
          token: response.data.token,
        })
      );
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };
  return { loginFunction, signupFunction };
};
