import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { IUser } from "../features/userSlice";
import { setPosts, addPost } from "../features/userSlice";
export const useRequests = () => {
  const user = useSelector((state: { user: IUser; token: string }) => state);
  const dispatch = useDispatch();

  const uploadPost = async (
    imgUrl: string,
    title: string,
    subtitle: string
  ) => {
    console.log(user);
    const response = await axios
      .post(
        "http://localhost:3001/posts/newpost",
        {
          title,
          subtitle,
          imgUrl,
        },
        {
          headers: {
            Authorization: `Bearer ${user.user.token}`,
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        dispatch(addPost(addPost(res.data)));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getPosts = async () => {
    const response = await axios
      .get("http://localhost:3001/posts/allposts", {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${user.user.token}`,
        },
      })
      .then((res) => {
        dispatch(setPosts(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return { uploadPost, getPosts };
};
