import "../SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../App";

const SignIn = ({ setLoggedUser }) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const data = { Email, Password };
  const history = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const data = { Email, Password };
    console.log(data);

    axios.post("http://localhost:5000/api/user/login", data).then((res) => {
      if (res.status === 400) {
        alert("Wrong Credintials");
        return;
      } else {
        sessionStorage.setItem("user", JSON.stringify(res.data));
        setLoggedUser(res.data);
        history("/test");
      }
    });
  };

  return (
    <UserContext.Provider value={setLoggedUser}>
      <html>
        <body>
          <main>
            <div class="row">
              <div class="colm-logo">
                <h2>Sign in to submit and review your tickets!</h2>
              </div>
              <div class="colm-form">
                <div class="form-container">
                  <h4>Sign in</h4>
                  <input
                    type="text"
                    placeholder="Email address"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input
                    type={"password"}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button class="btn-login" onClick={handleLogin}>
                    Login
                  </button>
                </div>
              </div>
            </div>
          </main>
        </body>
      </html>{" "}
    </UserContext.Provider>
  );
};
export default SignIn;
