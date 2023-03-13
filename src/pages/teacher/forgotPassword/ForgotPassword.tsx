import React from "react";
import { Layout, Input, Button } from "antd";
import LogoVerde from "./../../../assets/images/LogoVerde.png";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.styles.css";
import Swal from "sweetalert2";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState<string>("");

  const handleForgotPassword = () => {
    if (email) {
      Swal.fire({
        title: "Senha de recuperação enviado para o e-mail com sucesso!",
        icon: "success",
        confirmButtonText: "Ok",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/teacher/login");
        }
      });
    }
  };

  return (
    <div className="login-page-pin-forgot">
      <div>
        <img src={LogoVerde} alt="Logo" />
        <div className="div-description-forgot">
          <h3 className="title-forgot">Você esqueceu a sua senha?</h3>
          <span className="subtitle-forgot">
            Não se preocupe com isso, basta confirmar seu e-mail abaixo e iremos
            enviar um link em seu e-mail para redefinir sua senha.
          </span>
        </div>
        <div className="divInputs-forgot">
          <label className="labelInputs-forgot">Email</label>
          <input
            className="inputStyles-forgot"
            type="text"
            maxLength={100}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="divButton-forgot">
            <Button
              onClick={handleForgotPassword}
              className="buttonLogin-forgot"
            >
              <span className="descriptionButton-forgot">
                Recuperar a senha
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
