import React, { useState, useEffect } from "react";
import { updateUserDetails, getUserDetails } from "../services/services";

const UpdateProfile = () => {
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
  });

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
    <div>
      <h2>Update Profile</h2>
      <form className="w-[50%]">
        <input
          type="text"
          name="phone_number"
          placeholder="Phone Number"
          value={userData.phone_number}
          onChange={handleChange}
        />
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={userData.first_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={userData.last_name}
          onChange={handleChange}
        />
        <button type="button" onClick={handleUpdateProfile}>
          Update Profile
        </button>
      </form>

      {updatedUserData && (
        <div>
          <h2>Updated User Data</h2>
          <p>Last Name: {updatedUserData.last_name}</p>
          <p>First Name: {updatedUserData.first_name}</p>
          <p>Phone Number: {updatedUserData.phone_number}</p>
        </div>
      )}
    </div>
  );
};

export default UpdateProfile;
