import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Tickets from "./Tickets";
import { useState, createContext } from "react";
import Test from "./Pages/Test";
import "./App.css";
import AdminView from "./Pages/AdminView";
import ViewStatus from "./Pages/viewStatus";
import Assign from "./Pages/assign";
import Modal from "./Pages/Modal";
export const UserContext = createContext();

function App({ setLoggedUser }) {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signIn"
          element={<SignIn setLoggedUser={setLoggedUser} />}
        />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/Tickets" element={<Tickets />} />
        <Route path="/test" element={<Test setLoggedUser={setLoggedUser} />} />
        <Route path="/AdminView" element={<AdminView />} />
        <Route path="/viewStatus" element={<ViewStatus />} />
        <Route path="/assign" element={<Assign />} />
        <Route path="/Modal" element={<Modal />} />

      </Routes>
      <Footer />
    </>
  );
}
export default App;
