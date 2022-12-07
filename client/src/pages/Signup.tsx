import React, { FormEvent, useRef, useState } from "react";
import { Link } from "react-router-dom";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import { useConvertImage } from "../hooks/useConvertImage";
import { useUser } from "../hooks/useUser";

const Signup = () => {
  const { signupFunction } = useUser();
  const [image, setImage] = useState<any>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const uploadFile = async (file: any) => {
    const base64 = await useConvertImage(file.target.files[0]);
    setImage(base64);
  };
  const onSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    signupFunction(email, password, image);
  };
  return (
    <div className="signup">
      <form onSubmit={onSubmitForm} className="signup-card">
        <p>SIGN UP</p>
        <div>
          <div className="fileInput">
            <label htmlFor="profile">
              <FileCopyOutlinedIcon fontSize="large" />
            </label>
            <label htmlFor="profile">Profile Image</label>
          </div>
          <input
            type="file"
            className="file"
            id="profile"
            accept=".jpg, .jpeg, .png, .webp"
            onChange={(e) => uploadFile(e)}
          />
        </div>
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="pass"
          />
        </div>
        <p className="link">
          <span>Already have an account?</span>
          <Link to="/login"> LOGIN</Link>
        </p>
        <button className="btn-form" type="submit">
          SIGN UP
        </button>
      </form>
    </div>
  );
};

export default Signup;
