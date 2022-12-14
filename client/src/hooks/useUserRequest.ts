import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { IUser, USER } from "../features/userSlice";

export const useUserRequest = () => {
  const user = useSelector((state: { user: IUser }) => state.user);

  const [TheUser, setTheUser] = useState<USER | undefined>(undefined);
  const [error, setError] = useState<string>("");
  const getUser = async (id: string) => {
    const response = await axios
      .get(`http://localhost:3001/getuser/${id}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        setTheUser(res.data);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
    return { TheUser, error };
  };
  return { getUser };
};
