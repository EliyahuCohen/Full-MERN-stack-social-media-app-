import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { IUser } from "../features/userSlice";
import { setPosts, addPost, addRemoveFriend } from "../features/userSlice";
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
        console.log(res.data);
        dispatch(addPost(res.data));
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
  const addRemoveFriendFucntion = async (id: string) => {
    dispatch(addRemoveFriend(id));
    const response = await axios
      .patch(
        `http://localhost:3001/addRemoveFriend`,
        {
          friendID: id,
        },
        {
          headers: {
            Authorization: `Bearer ${user.user.token}`,
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const checkIfUserFollowing = (id: string) => {
    let find = false;
    for (let i = 0; i < user.user.user?.following.length!; i++) {
      if (user.user.user?.following[i] == id) {
        find = true;
        break;
      }
    }
  };
  return {
    uploadPost,
    addRemoveFriendFucntion,
    checkIfUserFollowing,
    getPosts,
  };
};
