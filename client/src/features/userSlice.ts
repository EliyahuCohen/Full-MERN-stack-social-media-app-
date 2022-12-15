import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface USER {
  email: string;
  password: string;
  imgUrl: string;
  following: USER[];
  followers: USER[];
  posts: POST[];
  _id: string;
}
export interface POST {
  imgUrl: string;
  likes: string[];
  subtitle: string;
  title: string;
  userId: string;
  uploader: USER;
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
    addRemoveFriend: (state, action) => {
      let exists = false;
      for (let i = 0; i < state.user?.following.length!; i++) {
        if (state.user?.following[i] == action.payload) {
          exists = true;
          break;
        }
      }
      if (exists) {
        state.user?.following.splice(
          state.user?.following.indexOf(action.payload),
          1
        );
      } else {
        state.user?.following.push(action.payload);
      }
    },
    setUserFollowing: (state: IUser, action) => {
      state.user!.following = action.payload;
    },
  },
});
export default userSlice.reducer;
export const {
  logout,
  login,
  setPosts,
  addPost,
  setUserFollowing,
  addRemoveFriend,
} = userSlice.actions;
