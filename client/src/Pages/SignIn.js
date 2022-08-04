import "../SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const SignIn = () => {

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const data = { Email, Password };
  const history = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const data = { Email, Password };
    console.log(data)
    

    axios.post("http://localhost:5000/api/user/login", data).then((res) => {
      if (res.status === 400) {
        alert("Wrong Credintials");
        return;
      }
      else{
        sessionStorage.setItem("user", JSON.stringify(res.data));
      }
    });

    const user = JSON.parse(sessionStorage.getItem("user")) || undefined;

      if (user === undefined) {
      alert("Login Is Invalid");
    } 
    else {
      alert("welcome");
      history("/");
      window.location.reload();
    }


     



  };

  return (
    <main style={{ padding: "1rem 0" }}>
      <div className="signupboxescontainers">
        <h1>Sign in</h1>
        <div className="signupboxes">
          <input
            type={"text"}
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
          ></input>
        </div>
        <div className="signupboxes">
          <input
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          ></input>
        </div>
        <button onClick={handleLogin} className="submit">
          login
        </button>
      </div>
    </main>
  );
};
export default SignIn;
