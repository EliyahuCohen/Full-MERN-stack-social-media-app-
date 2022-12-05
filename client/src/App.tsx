import "./App.css";
import { useSelector } from "react-redux";
import { IUser, USER } from "./features/userSlice";
import { useUser } from "./hooks/useUser";

function App() {
  const { user, token } = useSelector((state: { user: IUser }) => state.user);
  console.log(user, token);
  return <div className="App"></div>;
}

export default App;
