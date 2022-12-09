import { createSlice } from "@reduxjs/toolkit";

export interface USER {
  email: string;
  password: string;
  imgUrl: string;
  following: [];
  followers: USER[];
  posts: POST[];
}
export interface POST {
  imgUrl: string;
  likes: string[];
  subtitle: string;
  title: string;
  userId: string;
  _id: string;
}

export interface IUser {
  user: USER | null;
  token: string | null;
  posts: POST[] | null;
}

const initialState: IUser = {
  user: null,
  token: null,
  posts: null,
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
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    addPost: (state, action) => {
      state.posts?.push(action.payload);
    },
  },
});
export default userSlice.reducer;
export const { logout, login, setPosts, addPost } = userSlice.actions;
