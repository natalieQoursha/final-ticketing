import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Tickets from "./Tickets";
import { useState, createContext } from "react";
import Test from "./Pages/Test";
import "./App.css";
import AdminView from "./Pages/AdminView";
import ViewStatus from "./Pages/viewStatus";
import Assign from "./Pages/assign";
<<<<<<< HEAD
import Modal from "./Pages/Modal";

export const UserContext = createContext();
=======
import TicketsAdmin from "./Pages/ticketsAdmin"
function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [loggedUser, setLoggedUser] = useState(null);
>>>>>>> 9a1b60c4e205d1aaa71998c2049c7e9d3b9dc543

function App({ setLoggedUser }) {
  return (
    <>
<<<<<<< HEAD
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signIn"
          element={<SignIn setLoggedUser={setLoggedUser} />}
        />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/Tickets" element={<Tickets />} />
        <Route path="/test" element={<Test />} />
        <Route path="/AdminView" element={<AdminView />} />
        <Route path="/viewStatus" element={<ViewStatus />} />
        <Route path="/assign" element={<Assign />} />
        <Route path="/Modal" element={<Modal />} />
      </Routes>
      <Footer />
=======
      <div className={buttonPopup ? "unclickable" : "tickets"}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/signIn"
              element={<SignIn setLoggedUser={setLoggedUser} />}
            />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/Tickets" element={<Tickets />} />
            <Route path="/test" element={<Test />} />
            <Route path="/AdminView" element={<AdminView />} />
            <Route path="/viewStatus" element={<ViewStatus />} />
            <Route path="/assign" element={<Assign />} />
            <Route path="/TicketsAdmin" element={<TicketsAdmin />} />

          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
>>>>>>> 9a1b60c4e205d1aaa71998c2049c7e9d3b9dc543
    </>
  );
}
export default App;
