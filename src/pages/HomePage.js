import React from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import Searchbar from "../components/Searchbar";

const LandingPage = () => {
  // Get the location object using useLocation
  const location = useLocation();
  // Access the user type from the location state
  const userType = location.state && location.state.userType;

  return (
    <div>
      <Navbar userType={userType} />
      <div className="h-screen flex justify-center items-center">
        <div className="h-full w-full p-6 bg-white">
          <h1 className="text-3xl font-bold mb-4 text-center">Discover Your Next Read</h1>
          <Searchbar />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
