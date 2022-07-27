import "../SignIn.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const data = { Email, Password };

  const handleLogin = (e) => {
    const data = { Email, Password };
    axios
      .post("http://localhost:5000/api/user/login", data)
      .then((res) => sessionStorage.setItem("user", JSON.stringify(res.data)));
    console.log(data);
    const x = JSON.parse(localStorage.getItem("user"));
    console.log(x);
    // localStorage.removeItem('user')
    alert("Welcome " + localStorage.getItem("Email"));

    // useNavigate
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
          Login
        </button>
      </div>
    </main>
  );
};
export default SignIn;
