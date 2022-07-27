import "../SignIn.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const SignIn = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleLogin = (e) => {
    const data = { Email, Password };
    axios
      .post("http://localhost:5000/api/user/login", data)
      .then((res) => console.log(res));
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
      <button onClick={handleLogin}>Login</button>
    </>
  );
};
export default SignIn;
