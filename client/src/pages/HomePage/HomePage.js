import "./HomePage.scss";
import React from "react";
import Header from "../../components/partials/Header/Header.js";
import ConversionForm from "../../components/HomePageComponents/ConversionForm/ConversionForm";
import Footer from "../../components/partials/Footer/Footer";

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
