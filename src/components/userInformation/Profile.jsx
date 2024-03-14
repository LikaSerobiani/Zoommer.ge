import React, { useState, useEffect } from "react";
import Button from "../button/Index";
import { updateUserDetails, getUserDetails } from "../../services/services";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeSwitcher";

export default function Profile() {
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
  });
  const { t } = useTranslation("global");
  const { isDarkMode } = useTheme();

  const [updatedUserData, setUpdatedUserData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleUpdateProfile = async () => {
    try {
      const response = await updateUserDetails(userData);
      setUpdatedUserData(response.data);
      console.log("Profile updated successfully", response.data);
    } catch (error) {
      console.error("Error updating profile:", error.message);
    }
  };

  const fetchUpdatedUserData = async () => {
    try {
      const response = await getUserDetails();
      setUpdatedUserData(response.data);
      console.log("User data fetched successfully", response.data);
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };

  useEffect(() => {
    if (updatedUserData === null) {
      fetchUpdatedUserData();
    }
  }, [updatedUserData]);

  return (
    <div className="flex justify-between">
      {/* Update profile */}
      <div className="w-[500px] flex flex-col gap-5">
        <p
          className={`font-bold text-[20px] ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          {" "}
          {t("profilePage.profileInfo.updateProfile")}
        </p>
        <form className="flex flex-col gap-y-[20px]">
          <input
            type="text"
            name="phone_number"
            placeholder={t("placeholders.phoneNumber")}
            value={userData.phone_number}
            onChange={handleChange}
            className="focus:outline-none font-bold text-base w-full bg-light-grey px-[16px] py-[16px] rounded-[16px]"
          />
          <input
            type="text"
            name="first_name"
            placeholder={t("placeholders.firstName")}
            value={userData.first_name}
            onChange={handleChange}
            className="focus:outline-none font-bold text-base w-full bg-light-grey px-[16px] py-[16px] rounded-[16px]"
          />
          <input
            type="text"
            name="last_name"
            placeholder={t("placeholders.lastName")}
            value={userData.last_name}
            onChange={handleChange}
            className="focus:outline-none font-bold text-base w-full bg-light-grey px-[16px] py-[16px] rounded-[16px]"
          />
          <Button
            type="button"
            onClick={handleUpdateProfile}
            title={t("buttons.update")}
            className="text-white bg-primary w-full"
          />
        </form>
      </div>
      {/* Updated profile */}
      {updatedUserData && (
        <div className="w-[500px] flex flex-col gap-5">
          <h2
            className={`font-bold text-[20px] ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            {t("profilePage.profileInfo.updatedProfile")}
          </h2>
          <div className="bg-light-grey rounded-[16px] p-[20px] flex flex-col gap-3">
            <p>
              <span className="font-bold">
                {t("placeholders.phoneNumber")}:
              </span>{" "}
              {updatedUserData.phone_number}
            </p>
            <p>
              <span className="font-bold">{t("placeholders.firstName")}:</span>{" "}
              {updatedUserData.first_name}
            </p>
            <p>
              <span className="font-bold">{t("placeholders.lastName")}:</span>{" "}
              {updatedUserData.last_name}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
