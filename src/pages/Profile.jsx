import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProfileIcon from "../components/icons/ProfileIcon";
import Sidebar from "../components/sideBar/Index";
import Profile from "../components/userInformation/Profile";
import Purchase from "../components/userInformation/Purchase";
import WishList from "../components/userInformation/WishList";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeSwitcher";

const ProfilePage = () => {
  const nav = useNavigate();
  const { t } = useTranslation("global");
  const { isDarkMode } = useTheme();

  const [selectedPage, setSelectedPage] = useState(
    localStorage.getItem("selectedPage") || null
  );

  useEffect(() => {
    localStorage.setItem("selectedPage", selectedPage);
  }, [selectedPage]);

  const handleLogOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("selectedPage");
    nav("/");
  };

  return (
    <div className="container">
      <div className="flex flex-col gap-y-[20px]">
        <div className="flex justify-between items-center border-b-2 pb-[20px] w-full">
          <div className="flex gap-2 items-center">
            <ProfileIcon color={`${isDarkMode ? "#fff" : "#292D32"}`} />

            <p
              className={`font-bold text-[20px] ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              {" "}
              {t("profilePage.welcome.title")}
            </p>
          </div>
          <div onClick={handleLogOut} className="text-primary cursor-pointer">
            {t("profilePage.logOut.title")}
          </div>
        </div>
        <div className="flex flex-row justify-between gap-[40px]">
          <div>
            <Sidebar onItemClick={setSelectedPage} />
          </div>
          <div className="w-full h-full">
            {selectedPage === "Profile" && <Profile />}
            {selectedPage === "Purchase" && <Purchase />}
            {selectedPage === "WishList" && <WishList />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
