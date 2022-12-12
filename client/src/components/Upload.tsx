import React, { FormEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IUser } from "../features/userSlice";
import { useConvertImage } from "../hooks/useConvertImage";
import { useRequests } from "../hooks/useRequests";

const Upload = () => {
  const user = useSelector((state: { user: IUser }) => state.user);
  const { uploadPost, getPosts } = useRequests();

  const [imgUrl, setImageUrl] = useState<any>("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");

  useEffect(() => {
    getPosts();
  }, []);

  const uploadFile = async (file: any) => {
    const base64 = await useConvertImage(file.target.files[0]);
    setImageUrl(base64);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    uploadPost(imgUrl, title, subtitle);
    setImageUrl("");
    setTitle("");
    setSubtitle("");
  };

  return (
    <div className="upload">
      <h1>{user.posts?.length}</h1>
      <p>Enter title *required</p>
      <div className="one">
        <img src={user.user?.imgUrl} alt={user.user?.email + " Image"} />
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        />
      </div>
      <p>Enter subtitle</p>
      <div className="one sub">
        <input
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          type="text"
          placeholder="Enter something"
        />
      </div>
      <div className="two">
        <input
          type="file"
          onChange={uploadFile}
          accept=".jpg, .jpeg, .png, .webp"
        />
        <button onClick={handleSubmit}>POST</button>
      </div>
    </div>
  );
};

export default Upload;
