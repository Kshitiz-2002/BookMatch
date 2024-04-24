import React from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import Searchbar from "../components/Searchbar";

const HomePage = () => {
  // Get the location object using useLocation
  const location = useLocation();
  // Access the user type from the location state
  const userType = location.state && location.state.userType;

  return (
    <div>
      <Navbar userType={userType} />
      <div className="h-screen flex justify-center items-center">
            <Searchbar/>
      </div>
    </div>
  );
};

export default HomePage;
