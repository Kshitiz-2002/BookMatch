import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from "./pages/ProfilePage";
import AddBookPage from "./pages/AddBookPage";

const App = () => {
  return(
    <div>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/add-book' element={<AddBookPage/>}/>
      </Routes>
    </div>
  );
};

export default App;
