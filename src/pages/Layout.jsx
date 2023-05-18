import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Header } from "../components/ecom-ui/Layout/Header/index";
const Layout = () => {
  return (
    <Container>
      <Header />
      <div>
        <Outlet />
      </div>
    </Container>
  );
};

export default Layout;
