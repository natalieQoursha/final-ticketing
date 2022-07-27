import React, { useState } from "react";
import "../SignIn.css";
import { Link } from "react-router-dom";

const signIn = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const data = { Email, Password };

  const handleLogin = (e) => {
    console.log(data);
    localStorage.setItem("Email", Email);
    localStorage.getItem(Email);
    localStorage.setItem("Password", Password);
    localStorage.getItem(Password);
    alert("Welcome " + localStorage.getItem("Email"));
  };

  return (
    <>
      <label>Email : </label>
      <input
        type={"text"}
        value={Email}
        onChange={(e) => setEmail(e.target.value)}
        required
      ></input>
      <label>Password : </label>
      <input
        type={"password"}
        onChange={(e) => setPassword(e.target.value)}
        required
      ></input>

      <Link to="/tickets">
        <button onClick={handleLogin}>Login</button>
      </Link>
    </>
  );
};
export default signIn;
