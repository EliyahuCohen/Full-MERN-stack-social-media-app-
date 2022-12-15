import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IUser, POST, USER } from "../features/userSlice";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { useRequests } from "../hooks/useRequests";
const Post = ({ post }: { post: POST }) => {
  const [TheUser, setTheUser] = useState<USER | undefined>(undefined);
  const user = useSelector((state: { user: IUser }) => state.user);
  const { addRemoveFriendFucntion, checkIfUserFollowing } = useRequests();
  const [exists, setExists] = useState(false);

  const getUser = async () => {
    const response = await axios
      .get(`http://localhost:3001/getuser/${post.userId}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        setTheUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getUser();
    setExists(checkIfUserFollowing(post.userId));
  }, []);

  return (
    <div className="onePost">
      <div className="oneRow">
        <div className="first">
          <img
            src={TheUser?.imgUrl}
            height="100px"
            width="100px"
            alt="uploader image"
          />
          <div>
            <strong>{TheUser?.email.replace("@gmail.com", "")}</strong>
          </div>
        </div>
        <div
          onClick={() => {
            addRemoveFriendFucntion(post.userId, setExists);
          }}
        >
          {exists && user.user?._id !== post.userId ? (
            <BookmarkBorderOutlinedIcon
              fontSize="medium"
              style={{ cursor: "pointer" }}
            />
          ) : user.user?._id !== post.userId ? (
            <BookmarkBorderOutlinedIcon
              fontSize="medium"
              style={{ cursor: "pointer" }}
            />
          ) : (
            <strong>You!</strong>
          )}
        </div>
      </div>
      <div></div>
      <img src={post.imgUrl} alt="post image" />
    </div>
  );
};

export default Post;
