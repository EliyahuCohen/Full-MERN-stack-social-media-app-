import "./App.css";
import { useSelector } from "react-redux";
import { IUser, USER } from "./features/userSlice";
import { useUser } from "./hooks/useUser";

function App() {
  const { loginFunction, signupFunction } = useUser();
  signupFunction("eliyahu4@gmail.com", "123456789");
  return <div className="App"></div>;
}

export default App;
