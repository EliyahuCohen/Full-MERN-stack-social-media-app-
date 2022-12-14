import React, { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import { useUser } from "../hooks/useUser";

const Login = () => {
  const { loginFunction } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    loginFunction(email, password, setError);
  };
  return (
    <div className="signup">
      <form className="signup-card" onSubmit={onFormSubmit}>
        <p>LOGIN</p>
        <div>
          <label htmlFor="em">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="em"
          />
        </div>
        <div className="two">
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            id="pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p className="link">
          <span>Dont have an account?</span>
          <Link to="/signup"> SIGNUP</Link>
        </p>
        <button className="btn-form" type="submit">
          LOGIN
        </button>
        {error != "" && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
