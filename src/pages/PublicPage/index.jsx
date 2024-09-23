import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CategoriesMenu from "../../components/CategoriesMenu";

const Index = () => {
  return (
    <>
      <Header />
      <CategoriesMenu />
      <Outlet />
      <Footer />
    </>
  );
};

export default Index;
