import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IUser, POST } from "../features/userSlice";
import { useRequests } from "../hooks/useRequests";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
const Profile = () => {
  const [userPosts, setUserPosts] = useState<POST[]>([]);
  const user = useSelector((state: { user: IUser }) => state.user);
  const { getUserPosts } = useRequests();
  useEffect(() => {
    getUserPosts(user.user?._id!, setUserPosts);
  }, []);
  return (
    <div className="profile">
      <h1>{user.user?.email.replace("@gmail.com", "")}</h1>
      <div className="images">
        {userPosts.map((post) => {
          return (
            <div key={post._id} className="profileOne">
              <img src={post.imgUrl} alt="src" />

              <div className="overlay">
                <p>{post.likes.length}</p>
                <FavoriteBorderOutlinedIcon
                  fontSize="medium"
                  className="icon"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
