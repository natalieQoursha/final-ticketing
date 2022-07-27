import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const SignUp = () => {
  const [First_Name, setFirstName] = useState("");
  const [Last_Name, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [data, setUsers] = useState("");
  const [Role, setRole] = useState("");
  const [Company_ID, setCompanyID] = useState("");

  const handleSignUp = (e) => {
    console.log("Hello");

    const data = { First_Name, Last_Name, Email, Password, Role,Company_ID };
    sessionStorage.setItem('user',JSON.stringify( data))
    const fetchUsers = () => {
      axios.post("http://localhost:5000/api/user/signup", data).then((res) => {
        console.log("Hello");
      });
    };
    fetchUsers();
  };
  return (
    <main style={{ padding: "1rem 0" }}>
      <div>
        <div className="signupboxes">
          <input
            type={"text"}
            value={First_Name}
            onChange={(e) => setFirstName(e.target.value)}
            required
            placeholder="First name"
          ></input>
        </div>
        <div className="signupboxes">
          <input
            type={"text"}
            value={Last_Name}
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
        <div className="signupboxes">
          <input
            type={"text"}
            onChange={(e) => setRole(e.target.value)}
            required
            placeholder="Role"
          ></input>
        </div>
        <div className="signupboxes">
          <input
            type={"number"}
            onChange={(e) => setCompanyID(e.target.value)}
            required
            placeholder="Company ID"
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
