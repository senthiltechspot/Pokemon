import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "../Auth/User";
import Profile from "../Pages/Profile";
import CardDetails from "./CardDetails";
import Collection from "./Collection";

const Home = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Collection />} />
          <Route path="/Card/:pokename" element={<CardDetails />} />
          <Route path="/user/Profile" element={<Profile />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Home;
