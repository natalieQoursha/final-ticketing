import React, { useState } from "react";
import "../SignIn.css";

const SignIn = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleLogin = (e) => {
    const data = { Email, Password };
    console.log(data);
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
