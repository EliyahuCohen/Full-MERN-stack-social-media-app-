import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
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
            <NavLink to="login">Login</NavLink>
            <NavLink to="signup">Signup</NavLink>
          </div>
        ) : (
          <div className="items">
            <DarkModeOutlinedIcon />
            <NavLink to="/profile">
              <img
                className="avater"
                src={`${user.user.imgUrl}`}
                alt={user.user.email}
              />
            </NavLink>
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
