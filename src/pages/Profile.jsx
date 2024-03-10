import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProfileIcon from "../components/icons/ProfileIcon";
import Sidebar from "../components/sideBar/Index";
import Profile from "../components/userInformation/Profile";
import Purchase from "../components/userInformation/Purchase";

const ProfilePage = () => {
  const nav = useNavigate();

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
      <div className="flex flex-col gap-y-[20px] ">
        <div className="flex justify-between items-center border-b-2 pb-[20px] w-full">
          <div className="flex gap-2 items-center">
            <ProfileIcon />

            <p className="font-bold text-[20px] ">გამარჯობა</p>
          </div>
          <div onClick={handleLogOut} className="text-primary cursor-pointer">
            გამოსვლა
          </div>
        </div>
        <div className="flex flex-row justify-between gap-[20px]">
          <div>
            <Sidebar onItemClick={setSelectedPage} />
          </div>
          <div className="w-full h-full">
            {selectedPage === "Profile" && <Profile />}
            {selectedPage === "Purchase" && <Purchase />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
