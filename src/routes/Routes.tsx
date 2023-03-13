import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import LoginPin from "../pages/student/loginPin";
import LoginTeacher from "../pages/teacher/login/LoginTeacher";
import ForgotPassword from "../pages/teacher/forgotPassword/ForgotPassword";
import RegisterTeacher from "../pages/teacher/register/RegisterTeacher";

function isUserLoggedIn() {
  // Verifique se o usuário está logado (por exemplo, verificando se há um token de autenticação no local storage)
  return localStorage.getItem("token") !== null;
}

export const RoutesComponent = () => {
  return (
    <Routes>
      {/* Rotas públicas */}
      <Route path="/character" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/student/login" element={<LoginPin />} />
      <Route path="/teacher/login" element={<LoginTeacher />} />
      <Route path="/teacher/forgotPassword" element={<ForgotPassword />} />
      <Route path="/teacher/register" element={<RegisterTeacher />} />

      {/* Rotas privadas */}
      <Route
        path="/"
        element={isUserLoggedIn() ? <LoginPin /> : <Navigate to="/login" />}
      />
    </Routes>
  );
};
