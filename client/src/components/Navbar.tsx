import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IUser } from "../features/userSlice";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { logout } from "../features/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: { user: IUser }) => state.user);
  return (
    <nav className="navbar">
      <h1>
        <Link to="/">EliyahuSocial</Link>
      </h1>
      <div className="links">
        {!user.user || !user.token ? (
          <div className="items">
            <Link to="login">Login</Link>
            <Link to="signup">Signup</Link>
          </div>
        ) : (
          <div className="items">
            <DarkModeOutlinedIcon />
            <Link to="/profile">
              <img
                className="avater"
                src={`${user.user.imgUrl}`}
                alt={user.user.email}
              />
            </Link>
            <button
              type="button"
              onClick={() => {
                dispatch(logout());
              }}
            >
              <LogoutOutlinedIcon />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
