import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IUser } from "../features/userSlice";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";

import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const SideProfile = () => {
  const user = useSelector((state: { user: IUser }) => state.user);
  return (
    <div className="side-profile">
      <div className="row1">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={user.user?.imgUrl} alt={user.user?.email + "image"} />
          <div className="info">
            <Link to="/profile">
              <p>
                <strong>{user.user?.email.replace("@gmail.com", "")}</strong>
              </p>
            </Link>
            <span className="followrs">
              {user.user?.followers.length} followers
            </span>
            <span className="followrs" style={{ marginLeft: "0.5rem" }}>
              {user.user?.following.length} following
            </span>
          </div>
        </div>
        <ManageAccountsOutlinedIcon style={{ cursor: "pointer" }} />
      </div>

      <div className="line" />
      <div className="row2">
        <div className="links">
          <LocationOnOutlinedIcon className="linksIcon" />
          <span>Somewhere Out There, CA</span>
        </div>
        <div className="links">
          <WorkOutlineOutlinedIcon className="linksIcon" />
          <span>Some Degenerate</span>
        </div>
      </div>
      <div className="line" />
      <div className="row3">
        <p className="social-heading">Social Profiles</p>
        <div>
          <div className="social">
            <div className="social">
              <div className="social">
                <TwitterIcon style={{ marginRight: "0.2rem" }} />
                <p className="soical-words">Social Network</p>
              </div>
            </div>
            <EditOutlinedIcon className="linksIcon" />
          </div>
          <div className="social">
            <div className="social">
              <LinkedInIcon style={{ marginRight: "0.2rem" }} />
              <p className="soical-words">Social Platform</p>
            </div>
            <EditOutlinedIcon className="linksIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideProfile;
