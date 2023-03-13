import React from "react";
import "./LoginPin.styles.css";
import { Layout, Input, Button } from "antd";
import LogoBranca from "./../../../assets/images/LogoBranca.png";
import { useNavigate } from "react-router-dom";

export default function LoginPin() {
  const navigate = useNavigate();
  const [code, setCode] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");

  const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (/^\d{0,4}$/.test(newValue)) {
      setCode(newValue);
    }
  };

  const handleSaveLogin = () => {
    if (code.length < 4) {
      alert("O código deve ter 4 dígitos");
      return;
    } else {
      localStorage.setItem("code", code);
    }
    if (name.match(/^[a-zA-Z ]*$/)) {
      localStorage.setItem("name", name);
    } else {
      alert("Nome inválido");
      return;
    }
    alert("Encaminhando para a sala do Pin " + code);
    navigate("/student/room/" + code);
  };

  return (
    <div className="login-page-pin">
      <div>
        <img src={LogoBranca} alt="Logo" />
        <div className="divInputs">
          <label className="labelInputs">PIN da Sala</label>
          <input
            className="inputStyles"
            type="text"
            maxLength={4}
            value={code}
            onChange={handleCodeChange}
          />
          <label className="labelInputs">Nome do Aluno</label>
          <input
            type="text"
            className="inputStyles"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="divButton">
            <Button onClick={handleSaveLogin} className="buttonLogin">
              <span className="descriptionButton">Entrar na sala</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
