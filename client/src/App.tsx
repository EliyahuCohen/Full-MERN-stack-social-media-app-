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
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

function App() {
  const user = useSelector((state: { user: IUser }) => state.user);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              user.token != null ? (
                <div>
                  <Dashboard />
                </div>
              ) : (
                <Navigate to="/login" replace={true} />
              )
            }
          />
          <Route
            path="login"
            element={
              user.token != null ? (
                <Navigate to="/" replace={true} />
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="signup"
            element={
              user.token != null ? (
                <Navigate to="/" replace={true} />
              ) : (
                <Signup />
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
