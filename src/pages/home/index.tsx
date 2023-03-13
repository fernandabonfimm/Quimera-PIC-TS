import React from "react";
import { Header } from "../../components/header";
import Logo from "../../assets/images/Logo.png";
import VetsImage from "../../assets/images/vetsImage.png";
import { Button, Layout, Row, Col } from "antd";
import { RiUserSharedLine } from "react-icons/ri";
import "./Home.styles.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { Content } = Layout;
  const navigate = useNavigate();
  return (
    <>
      <Header>
        <>
          <img src={Logo} alt="logo" className="logo-header" />
          <Button className="login-button" onClick={() => navigate('/character')}>
            <RiUserSharedLine style={{ marginRight: "10px" }} />
            Logar
          </Button>
        </>
      </Header>
      <Content className="content-page-home">
        <img src={VetsImage} alt="medicalVet" className="image-vetmed" />
        <div className="text-buttons-home">
        <h1 className="title-vetmed">
          Ajudamos você a cuidar do seu pet com muito amor!
        </h1>
        <p className="text-vetmed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          condimentum, nisl ut ultricies lacinia, nisl nisl aliquam nisl, ut
          aliquam nisl nisl eu nisl. Sed condimentum, nisl ut ultricies lacinia,
          nisl nisl aliquam nisl, ut aliquam nisl nisl eu nisl.
        </p>
        <Button type="primary" className="login-button">
          Cadastrar
        </Button>
        </div>
      </Content>
    </>
  );
}
