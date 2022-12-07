import "./App.css";
import { useUser } from "./hooks/useUser";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { IUser } from "./features/userSlice";

function App() {
  const user = useSelector((state: { user: IUser }) => state.user);
  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/">Home</Link>
          <Link to="login">Login</Link>
          <Link to="signup">Signup</Link>
        </div>
        <Routes>
          <Route
            path="login"
            element={!user.user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="signup"
            element={!user.user ? <Signup /> : <Navigate to="/" />}
          />
          <Route
            path="/"
            element={
              !user.user ? (
                <Login />
              ) : (
                <>
                  <h1>Hey this is the Home page</h1>
                  <img
                    src={user.user.imgUrl}
                    alt={`${user.user.email} image logo`}
                  />
                </>
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
