import React from "react";
import { Outlet } from "react-router-dom";
import { Layout as AntLayout } from "antd";

const { Header, Footer, Content } = AntLayout;

const Layout = () => {
  return (
    <AntLayout>
      <Content style={{ padding: "20px", minHeight: "80vh" }}>
        <Outlet />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Crypto Provider ©2024 Created by YourName
      </Footer>
    </AntLayout>
  );
};

export default Layout;
