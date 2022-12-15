import React, { FormEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IUser } from "../features/userSlice";
import { useRequests } from "../hooks/useRequests";
import { storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import PrintPosts from "./PrintPosts";

const Upload = () => {
  const user = useSelector((state: { user: IUser }) => state.user);
  const { uploadPost, getPosts } = useRequests();

  const [imgUrl, setImageUrl] = useState<any>("");
  const [file, setFile] = useState<File | undefined>();
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");

  useEffect(() => {
    getPosts();
  }, []);

  const handleUpload = (e: any) => {
    e.preventDefault();

    if (!file) {
      alert("please select an image");
      return;
    }
    const time = new Date();
    const storageRef = ref(storage, `images/${time.getMilliseconds()}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshow) => {
        const progress =
          (snapshow.bytesTransferred / snapshow.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageUrl(downloadURL);
          if (imgUrl != "") {
            handleSubmit();
          }
        });
      }
    );
  };
  const handleSubmit = async () => {
    uploadPost(imgUrl, title, subtitle);
    setImageUrl("");
    setTitle("");
    setSubtitle("");
    setFile(undefined);
  };

  return (
    <div>
      <div className="upload">
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
            onChange={(e: any) => setFile(e.target.files[0])}
            accept=".jpg, .jpeg, .png, .webp, .avif,.gif"
          />
          <div>
            <button onClick={handleUpload}>POST</button>
          </div>
        </div>
      </div>
      <PrintPosts />
    </div>
  );
};

export default Upload;
