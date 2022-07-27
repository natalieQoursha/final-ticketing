import "../SignIn.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const signIn = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const data = { Email, Password };

  const handleLogin = (e) => {
    const data = { Email, Password };
    axios
      .post("http://localhost:5000/api/user/login", data)
      .then((res) => console.log(res));
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
