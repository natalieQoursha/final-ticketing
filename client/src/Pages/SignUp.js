import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const handleSignUp = (e) => {
    const data = { firstName, lastName, Email, Password };

    console.log(data);
    localStorage.setItem("firstName", firstName);
    localStorage.getItem(firstName);
    localStorage.setItem("last_Name", lastName);
    localStorage.getItem(lastName);
    localStorage.setItem("Email", Email);
    localStorage.getItem(Email);
    localStorage.setItem("Password", Password);
    localStorage.getItem(Password);
    alert("Welcome " + localStorage.getItem("First_Name"));
  };
  return (
    <main style={{ padding: "1rem 0" }}>
      <div>
        <div className="signupboxes">
          <input
            type={"text"}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            placeholder="First name"
          ></input>
        </div>
        <div className="signupboxes">
          <input
            type={"text"}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            placeholder="Last name"
          ></input>
        </div>
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
        <Link to="/SignIn">
          <button onClick={handleSignUp}>Sign up</button>
        </Link>
      </div>
    </main>
  );
};
export default SignUp;
