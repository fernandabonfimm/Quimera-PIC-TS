import React from "react";
import { Layout } from "antd";
import './Header.styles.css'

export const Header = ({
  children,
  className,
}: {
  children: JSX.Element;
  className?: string;
}) => {
  const { Header } = Layout;
  return <Header className={`header-default ${className}`} >{children}</Header>;
};
