import "./LoginPage.scss";
import React from "react";
import Header from "../../components/partials/Header/Header2";
import Footer from "../../components/partials/Footer/Footer";
import UserLoginForm from "../../components/LoginComponents/LoginForm/UserLoginForm";

const login = () => {
  return (
    <div className="background">
      <Header />
      <UserLoginForm />
      <Footer />
    </div>
  );
};

export default login;
