import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CategoriesMenu from "../../components/CategoriesMenu";

const Index = () => {
  const location = useLocation();
  const showMenu = !["/login", "/register"].includes(location.pathname);

  return (
    <>
      <Header />
      {showMenu && <CategoriesMenu />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Index;
