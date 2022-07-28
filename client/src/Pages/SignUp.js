import { Link,useNavigate } from "react-router-dom";
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
  const history=useNavigate();
  const handleSignUp = (e) => {
    const data = { First_Name, Last_Name, Email, Password, Role, Company_ID };
    
    axios
      .post("http://localhost:5000/api/user/signup", data)
      .then((res) => {if(res.status===200){
        window.alert('Signed Up Login with the Credintials You Entered')
        history('/signIn')

      }});
      
   const x = JSON.parse(localStorage.getItem('user'))
  };


  return (
    <main style={{ padding: "1rem 0" }}>
      <div className="signupboxescontainer">
        <h1>Sign p</h1>
        <br />
        <div className="signupboxes">
          <input
            type={"text"}
            value={First_Name}
            onChange={(e) => setFirstName(e.target.value)}
            required
            placeholder="First name"
          ></input>
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
        <button className="submit" onClick={handleSignUp}>
            Sign up
          </button>
        <Link to="/SignIn">
          SignIn
        </Link>
      </div>
    </main>
  );
};
export default SignUp;
