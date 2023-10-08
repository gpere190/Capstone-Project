import "./HomePage.scss";
import React, { useState } from "react";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer";
import profileMickeyImage from "../../assets/images/profile_mickey.png";
import TextInput from "../../components/HomePageComponents/TextInput/TextInput";
import { NavLink } from "react-router-dom";
import MyButton from "../../components/HomePageComponents/MickeyThumbsUp/MickeyThumbsUp";

const HomePage = () => {
  const [profileIcon, setProfileIcon] = useState(profileMickeyImage);

  return (
    <div className="background">
      <Header />
      <div className="body">
        <img className="body__profileImage" src={profileIcon}></img>
        <p className="body__text">Convert letters to Fingerspelling</p>
        <div className="body__textboxRow">
          <TextInput />
          <MyButton />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
