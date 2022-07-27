import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [data, setUsers] = useState("");
  const [Role, setRole] = useState("");
  const [companyID, setCompanyID] = useState("");

  const handleSignUp = (e) => {
    console.log("Hello");

    const data = { firstName, lastName, Email, Password, Role, companyID };

    console.log(data);
    localStorage.setItem("firstName", firstName);
    localStorage.getItem(firstName);
    localStorage.setItem("last_Name", lastName);
    localStorage.getItem(lastName);
    localStorage.setItem("Email", Email);
    localStorage.getItem(Email);
    localStorage.setItem("Password", Password);
    localStorage.getItem(Password);
    localStorage.setItem("Role", Role);
    localStorage.getItem(Role);
    alert("Welcome " + localStorage.getItem("firstName"));
    const fetchUsers = () => {
      axios.post("http://localhost:5000/api/user/signup", data).then((res) => {
        console.log("Hello");
      });
    };
    fetchUsers();
  };
  return (
    <main style={{ padding: "1rem 0" }}>
      <div className="signupboxescontainer">
        <h1>Sign up</h1>
        <br />
        <div className="signupboxes">
          <input
            type={"text"}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            placeholder="First name"
          ></input>
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
          <input
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          ></input>
        </div>
        <div className="signupboxes">
          <input
            type={"text"}
            onChange={(e) => setRole(e.target.value)}
            required
            placeholder="Role"
          ></input>

          <input
            type={"number"}
            onChange={(e) => setCompanyID(e.target.value)}
            required
            placeholder="Company ID"
          ></input>
        </div>
        <Link to="/SignIn">
          <button className="submit" onClick={handleSignUp}>
            Sign up
          </button>
        </Link>
      </div>
    </main>
  );
};
export default SignUp;
