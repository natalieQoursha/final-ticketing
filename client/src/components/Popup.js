import "./Popup.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Popup(props) {
  const [Ticket_Type, setTicketType] = useState("");
  const [Sevirity, setSeverity] = useState("");
  const [Description, setDescription] = useState("");
  const [Product_Types, setProduct] = useState("");

  const [users, setUsers] = useState();
  const user = JSON.parse(sessionStorage.getItem("user"));

  useEffect(() => {
    const fetchUsers = () => {
      axios.get("http://localhost:5000/api/ticket/all-users/").then((res) => {
        setUsers(res.data);
        console.log(res.data.ID);
      });
    };
    fetchUsers();
  }, []);

  const submitUser = (e) => {
    const user = JSON.parse(sessionStorage.getItem("user")) || undefined;
    e.preventDefault();
    const data = {
      Ticket_Type,
      Sevirity,
      Product_Types,
      Description,
      CreatedOn: new Date(),
      Company_ID: user.Company_ID,
      User_ID: user.ID,
      Status: "Submitted",
    };
    axios
      .post("http://localhost:5000/api/ticket/all-tickets", data, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((res) => props.setTrigger(!props.trigger));
    alert("Ticket submitted successfully");
  };

  return props.trigger ? (
    <form onSubmit={submitUser}>
      <div className="popup">
        <div className=".popup-inner">
          <button className="close-btn" onClick={() => props.setTrigger(false)}>
            X
          </button>
          <h1>{`Welcome ${user.First_Name},${user.Company_Name}`}</h1>
          <br />
          <div className="alignment">
            <label for="Ticket_Type">Ticket type : </label>
            <select
              value={Ticket_Type}
              onChange={(e) => setTicketType(e.target.value)}
              name="Ticket_Type"
              id="Ticket_Type"
            >
              <option value="General">General</option>
              <option value="Software">Software</option>
              <option value="Hardware">Hardware</option>
              <option value="Networks">Networks</option>
            </select>
          </div>
          <div className="alignment">
            <label for="Severity">Severity : </label>
            <select
              value={Sevirity}
              onChange={(e) => setSeverity(e.target.value)}
              name="Severity"
              id="Severity"
            >
              <option value="Not Important">Not Important</option>
              <option value="Important">Important</option>
              <option value="Very Important">Very Important</option>
            </select>
          </div>
          <div className="alignment">
            <label for="Product_Types">Product : </label>
            <select
              value={Product_Types}
              onChange={(e) => setProduct(e.target.value)}
              name="Product_Types"
              id="Product_Types"
            >
              <option value="Parking">Parking</option>
              <option value="General Building">General Building</option>
              <option value="Computer">Computer</option>
              <option value="Staff">Staff</option>
            </select>
          </div>
          <br />
          <h2>Ticket Description : </h2>
          {props.children}
        </div>
        <div>
          <textarea
            value={Description}
            rows="5"
            cols="50"
            onChange={(e) => setDescription(e.target.value)}
            className="txta"
          ></textarea>
          <br></br>
        </div>
        <button className="submit-btn">Submit</button>
      </div>
    </form>
  ) : (
    ""
  );
}
export default Popup;
