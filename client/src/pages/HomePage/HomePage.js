import "./HomePage.scss";
import React from "react";
import Header from "../../components/Header/Header.js";
import ConversionForm from "../../components/HomePageComponents/ConversionForm/ConversionForm";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <div className="background">
      <Header />
      <ConversionForm />
      <Footer />
    </div>
  );
};

export default HomePage;
