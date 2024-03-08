import React, { useState, useEffect } from "react";
import { updateUserDetails, getUserDetails } from "../services/services";
import Button from "../components/button/Index";
import { useNavigate } from "react-router-dom";
import ProfileIcon from "../components/icons/ProfileIcon";

const UpdateProfile = () => {
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
  });

  const [updatedUserData, setUpdatedUserData] = useState(null);
  const nav = useNavigate();

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

  const handleLogOut = () => {
    localStorage.removeItem("accessToken");
    setUserData({
      first_name: "",
      last_name: "",
      phone_number: "",
    });

    setTimeout(() => {
      nav("/");
    }, 1000);
  };
  return (
    <div className="container pt-[50px]">
      <div className="flex flex-col gap-y-[20px] ">
        <div className="flex justify-between items-center border-b-2 pb-[20px] w-full">
          <div className="flex gap-2 items-center">
            <ProfileIcon />
            {updatedUserData && (
              <p className="font-bold text-[20px] ">
                გამარჯობა, {updatedUserData.first_name}!
              </p>
            )}
          </div>
          <div onClick={handleLogOut} className="text-primary cursor-pointer">
            გამოსვლა
          </div>
        </div>
        <div className="flex justify-between">
          {/* Update profile */}
          <div className="w-[500px] flex flex-col gap-5 ">
            <p className="font-bold text-[20px]">პროფილის რედაქტირება</p>
            <form className="flex flex-col gap-y-[20px]">
              <input
                type="text"
                name="phone_number"
                placeholder="ტელეფონის ნომერი"
                value={userData.phone_number}
                onChange={handleChange}
                className="focus:outline-none font-bold text-base w-full bg-light-grey px-[16px] py-[16px] rounded-[16px]"
              />
              <input
                type="text"
                name="first_name"
                placeholder="სახელი"
                value={userData.first_name}
                onChange={handleChange}
                className="focus:outline-none font-bold text-base w-full bg-light-grey px-[16px] py-[16px] rounded-[16px]"
              />
              <input
                type="text"
                name="last_name"
                placeholder="გვარი"
                value={userData.last_name}
                onChange={handleChange}
                className="focus:outline-none font-bold text-base w-full bg-light-grey px-[16px] py-[16px] rounded-[16px]"
              />
              <Button
                type="button"
                onClick={handleUpdateProfile}
                children="განახლება"
                className="text-white bg-primary w-full"
              />
            </form>
          </div>
          {/* Updated profile */}
          {updatedUserData && (
            <div className="w-[500px] flex flex-col gap-5">
              <h2 className="font-bold text-[20px]">განახლებული ინფორმაცია</h2>
              <div className="bg-light-grey rounded-[16px] p-[20px] flex flex-col gap-3">
                <p>
                  <span className="font-bold">ტელეფონის ნომერი:</span>{" "}
                  {updatedUserData.phone_number}
                </p>
                <p>
                  <span className="font-bold">სახელი:</span>{" "}
                  {updatedUserData.first_name}
                </p>
                <p>
                  <span className="font-bold">გვარი:</span>{" "}
                  {updatedUserData.last_name}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
