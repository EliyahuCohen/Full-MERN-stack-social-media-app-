import React from "react";
import PersonRemoveOutlinedIcon from "@mui/icons-material/PersonRemoveOutlined";
import { useRequests } from "../hooks/useRequests";
import { USER } from "../features/userSlice";
const Following = ({ one }: { one: USER }) => {
  const { addRemoveFriendFucntion } = useRequests();
  return (
    <div>
      <div className="following">
        <div className="insideFollowing">
          <img
            src={one.imgUrl}
            alt=""
            style={{ borderRadius: "50%", height: "50px", width: "50px" }}
          />
          <p>{one.email}</p>
        </div>
        <div onClick={() => addRemoveFriendFucntion(one._id, function () {})}>
          <PersonRemoveOutlinedIcon className="icons" />
        </div>
      </div>
    </div>
  );
};

export default Following;
