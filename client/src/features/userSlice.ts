import { createSlice } from "@reduxjs/toolkit";

export interface USER {
  email: string;
  password: string;
  imgUrl: string;
  following: [];
  followers: [];
}

export interface IUser {
  user: USER | null;
  token: string | null;
}

const initialState: IUser = {
  user: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  //now adding the functions / reducers to handle this specific state
  reducers: {
    logout: (state: IUser) => {
      state.token = null;
      state.token = null;
    },
    login: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
  },
});
export default userSlice.reducer;
export const { logout, login } = userSlice.actions;
