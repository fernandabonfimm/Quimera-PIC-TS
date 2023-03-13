import React from "react";
import { Layout, Input, Button } from "antd";
import LogoBranca from "./../../../assets/images/LogoBranca.png";
import { useNavigate } from "react-router-dom";
import { HiOutlineKey } from "react-icons/hi";
import { HiOutlineUserPlus } from "react-icons/hi2";

import "./LoginTeacher.styles.css";

export default function LoginTeacher() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const handleSaveLogin = () => {
    if(password && email) {
      navigate("/teacher/home");
    }
  };

  return (
    <div className="login-page-pin">
      <div>
        <img src={LogoBranca} alt="Logo" />
        <div className="divInputs">
          <label className="labelInputs">Email</label>
          <input
            className="inputStyles"
            type="text"
            maxLength={100}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="labelInputs">Senha</label>
          <Input.Password
            type="text"
            maxLength={100}
            className="inputStyles"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="divIconsAndSpan">
            <HiOutlineKey className="iconLogin" />{" "}
            <span
              className="spanLogin"
              onClick={() => navigate("/teacher/forgotPassword")}
            >
              Esqueceu sua senha?
            </span>
          </div>
          <div className="divButton">
            <Button onClick={handleSaveLogin} className="buttonLogin">
              <span className="descriptionButton">Fazer login</span>
            </Button>
          </div>
          <div className="divIconsAndSpan">
            <HiOutlineUserPlus className="iconLogin" />
            <span
              className="spanLogin"
              onClick={() => navigate("/teacher/register")}
            >
              Ainda não possui login? Realize seu cadastro!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
