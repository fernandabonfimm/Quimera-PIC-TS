import React from "react";
import { Layout, Card } from "antd";
import "./Login.styles.css";
import { RiUserLine, RiBookOpenLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { Content } = Layout;
  const { Meta } = Card;
  const navigate = useNavigate();
  return (
    <>
      <Content className="login-page-initial">
        <Card className="card-users" onClick={() => navigate("/teacher/login")}>
          <div className="ballBase backgroundBallGreen">
            <RiBookOpenLine className="iconStyle" />
          </div>
          <Meta title="Professor" className="meta-users" />
        </Card>
        <Card className="card-users" onClick={() => navigate("/student/login")}>
          <div className="ballBase backgroundBallBlue">
            <RiUserLine className="iconStyle" />
          </div>
          <Meta title="Aluno" className="meta-users" />
        </Card>
      </Content>
    </>
  );
}
