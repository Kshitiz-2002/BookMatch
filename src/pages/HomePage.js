import React from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  // Get the location object using useLocation
  const location = useLocation();
  // Access the user type from the location state
  const userType = location.state && location.state.userType;

  return (
    <div>
      <Navbar userType={userType} />
      {/* Other content of the home page */}
    </div>
  );
};

export default HomePage;
