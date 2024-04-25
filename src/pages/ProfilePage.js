import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

const ProfilePage = () => {
  // Get the location object using useLocation
  const location = useLocation();
  // Access the user type from the location state
  const userType = location.state && location.state.userType;

  // Reference for file input
  const fileInputRef = useRef(null);

  // State for profile data and edit mode
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
  });
  const [editMode, setEditMode] = useState(false);

  // Function to handle profile data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to trigger file input click
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  // Function to handle edit profile click
  const handleEditProfile = () => {
    setEditMode(true);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform update logic here (e.g., using Axios or other methods)
    console.log("Updated profile data:", profileData);
    setEditMode(false); // Exit edit mode after saving changes
  };

  return (
    <div>
      <Navbar userType={userType} />
      <div className="max-w-3xl mx-auto mt-8 px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
          {!editMode ? (
            <div>
              <p className="text-lg">Name: {profileData.name}</p>
              <p className="text-lg">Email: {profileData.email}</p>
              <button
                onClick={handleEditProfile}
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Edit Profile
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={profileData.name}
                onChange={handleChange}
                className="mb-4 p-2 border border-gray-300 rounded"
              />
              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleChange}
                className="mb-4 p-2 border border-gray-300 rounded"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Save Changes
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
