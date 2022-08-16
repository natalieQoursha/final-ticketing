import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Tickets from "./Tickets";
import { useState } from "react";
import Test from "./Pages/Test";
import "./App.css";
import AdminView from "./Pages/AdminView"
import ViewStatus from "./Pages/viewStatus"


function App() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
      <div className={buttonPopup ? "unclickable" : "tickets"}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/Tickets" element={<Tickets />} />
            <Route path="/test" element={<Test />} />
            <Route path="/AdminView" element={<AdminView />} />
            <Route path="/viewStatus" element={<ViewStatus />} />

          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
