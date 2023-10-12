import "./CreateAccountPage.scss";
import React from "react";
import Header from "../../components/partials/Header/Header2";
import Footer from "../../components/partials/Footer/Footer";
import Profile1 from "../../assets/images/profiles/profile_mickey.png";
import Profile2 from "../../assets/images/profiles/Profile_Baby.png";
import Profile3 from "../../assets/images/profiles/Profile_IronMan.png";
import Profile4 from "../../assets/images/profiles/Profile_spoon.png";
import Profile5 from "../../assets/images/profiles/Profile_Woodie.png";
import HaveAccountButton from "../../components/CreateAccountComponents/HaveAccountButton/HaveAccountButton";
import Icon from "../../components/Icon/Icon";
import GoogleIcon from "../../assets/images/misc/GoogleIcon.png";
import MetaIcon from "../../assets/images/misc/MetaIcon.png";
import AppleIcon from "../../assets/images/misc/AppleIcon.png";
import ProfileButton from "../../components/CreateAccountComponents/ProfileButton/ProfileButton";
import CreateAccountForm from "../../components/CreateAccountComponents/CreateAccountForm/CreateAccountForm";

const CreateAccountPage = () => {
  return (
    <div className="background">
      <Header />
      <div className="createaccountbody">
        <div className="createaccountbody__left">
          <p className="createaccountbody__left__Text">
            Select a profile character
          </p>
          <div className="createaccountbody__left__characters">
            <ProfileButton profile={Profile1} profileNum="1" />
            <ProfileButton profile={Profile2} profileNum="2" />
            <ProfileButton profile={Profile3} profileNum="3" />
            <ProfileButton profile={Profile4} profileNum="4" />
            <ProfileButton profile={Profile5} profileNum="5" />
          </div>
        </div>

        <div className="createaccountbody__right">
          <p className="createaccountbody__right__Text">Create Account</p>

          <CreateAccountForm />

          <HaveAccountButton />

          <p className="createaccountbody__right__continuewith">
            Or continue with
          </p>
          <div className="createaccountbody__right__platformIcons">
            <Icon icon={GoogleIcon} />
            <Icon icon={MetaIcon} />
            <Icon icon={AppleIcon} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateAccountPage;