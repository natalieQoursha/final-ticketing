import "./Popup.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Popup(props) {
  const [ticketType, setTicketType] = useState("");
  const [sevirity, setSeverity] = useState("");
  const [description, setDescription] = useState("");
  const [product, setProduct] = useState("");

  const submitUser = (e) => {
    const data = { ticketType, sevirity, product, description };
    axios
      .post("http://localhost:5000/api/ticket/all-tickets", data, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((res) => console.log(res));
    alert("Ticket submitted successfully");
  };

  return props.trigger ? (
    <form onSubmit={submitUser}>
      <div className="popup">
        <div className=".popup-inner">
          <button className="close-btn" onClick={() => props.setTrigger(false)}>
            X
          </button>
          <h1>Welcome (data.User) from (data.Company)</h1>
          <br />
          <div className="alignment">
            <label for="Ticket Type">Ticket type : </label>
            <select
              value={ticketType}
              onChange={(e) => setTicketType(e.target.value)}
              name="ticketType"
              id="ticketType"
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
              value={sevirity}
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
            <label for="product">Product : </label>
            <select
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              name="product"
              id="product"
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
            value={description}
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
