import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IUser, POST, USER } from "../features/userSlice";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import { useRequests } from "../hooks/useRequests";
const Post = ({ post }: { post: POST }) => {
  const [exists, setExists] = useState(false);
  const [TheUser, setTheUser] = useState<USER | undefined>(undefined);
  const user = useSelector((state: { user: IUser }) => state.user);
  const { addRemoveFriendFucntion, checkIfUserFollowing } = useRequests();

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
        // need to check if the user is folling and than put the related icon
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getUser();
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
            addRemoveFriendFucntion(TheUser?._id!);
          }}
        >
          {!exists && user.user?._id !== TheUser?._id && (
            <PersonAddAlt1Icon fontSize="medium" />
          )}
          {exists && <PersonRemoveIcon fontSize="medium" />}
          {TheUser?._id == user.user?._id && <strong>You!</strong>}
        </div>
      </div>
      <div></div>
      <img src={post.imgUrl} alt="post image" />
    </div>
  );
};

export default Post;
