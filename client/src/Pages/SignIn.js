import "../SignIn.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

const SignIn = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const data = { Email, Password };

  const handleLogin = (e) => {
    const data = { Email, Password };
    
    axios
      .post("http://localhost:5000/api/user/login", data)
      .then((res) =>  sessionStorage.setItem('user',JSON.stringify( res.data)));
      
   const x = JSON.parse(localStorage.getItem('user'))
   // localStorage.removeItem('user')

    // useNavigate
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
