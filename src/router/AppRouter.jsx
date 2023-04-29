import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const AppRouter = () => {
  const {currentUser} = useContext(AuthContext)

  // const ProtectedRoute = ({children}) => {
  //   !currentUser && <Navigate to="/login" />
  // }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
