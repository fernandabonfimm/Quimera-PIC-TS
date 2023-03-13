import React from "react";
import { Layout, Input, Button } from "antd";
import LogoVerde from "./../../../assets/images/LogoVerde.png";
import { useNavigate } from "react-router-dom";
import MedVet from "./../../../assets/images/medVet.jpg";
import "./RegisterTeacher.styles.css";
import Swal from "sweetalert2";

export default function RegisterTeacher() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");

  const handleRegisterTeacher = () => {
    if (name) {
      if (email) {
        if (email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i)) {
          if (password) {
            if (
              password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
            ) {
              if (confirmPassword) {
                if (password === confirmPassword) {
                  Swal.fire({
                    title: "Cadastro realizado com sucesso!",
                    icon: "success",
                    confirmButtonText: "Ok",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      navigate("/teacher/login");
                    }
                  });
                } else {
                  alert("Senhas não conferem");
                }
              } else {
                alert("Confirme sua senha");
              }
            } else {
              alert("Senha inválida");
            }
          } else {
            alert("Digite sua senha");
          }
        }
      }
    }
  };

  return (
    <div className="rowPages">
      <div className="login-page-pin-register">
        <div>
          <img src={LogoVerde} alt="Logo" />
          <div className="div-description-register">
            <h3 className="title-register">
              Olá professor, você ainda não possui cadastro?
            </h3>
            <span className="subtitle-register">
              Basta preencher as informações abaixo para realizar seu cadastro
              na plataforma como professor.
            </span>
          </div>
          <div className="divInputs-register">
            <label className="labelInputs-register">Nome completo</label>
            <Input
              className="inputStyles-register"
              type="text"
              maxLength={100}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="labelInputs-register">Email</label>
            <Input
              className="inputStyles-register"
              type="text"
              maxLength={100}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="labelInputs-register">Senha </label>
            <Input.Password
              className="inputStyles-register"
              type="text"
              maxLength={100}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="labelInputs-register">Confirmar senha</label>
            <Input.Password
              className="inputStyles-register"
              type="text"
              maxLength={100}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="divButton-register">
              <Button
                onClick={handleRegisterTeacher}
                className="buttonLogin-register"
              >
                <span className="descriptionButton-register">
                  Realizar cadastro
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="register-page-second-size-register">
        <img src={MedVet} alt="medvet" className="imgSecondSize" />
      </div>
    </div>
  );
}
