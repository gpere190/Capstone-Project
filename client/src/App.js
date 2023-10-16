import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage/CreateAccountPage";
import UserContext from "./utils/UserContext";
import ProfileContext from "./utils/ProfileContext";
import profileMickeyImage from "./assets/images/profiles/profile_mickey.png";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [profileIcon, setProfileIcon] = useState(profileMickeyImage);

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <ProfileContext.Provider value={{ profileIcon, setProfileIcon }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<CreateAccountPage />} />
          </Routes>
        </BrowserRouter>
      </ProfileContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
