import React from "react";
import "./Popup.css";
import { useState } from "react";

function Popup(props) {
  const [ticketType, setTicketType] = useState("");
  const [description, setDescription] = useState("");
  const [sevirity, setSeverity] = useState("Not Important");
  const [product, setProduct] = useState("Software");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { ticketType, description, sevirity, product };
    console.log(data);
  };
  return props.trigger ? (
    <form onSubmit={handleSubmit}>
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
              value={sevirity}
              onChange={(e) => setTicketType(e.target.value)}
              name="Severity"
              id="Severity"
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
            <label for="Type">Product : </label>
            <select
              value={ticketType}
              onChange={(e) => setProduct(e.target.value)}
              name="Type"
              id="Type"
            >
              <option value="Parking">Parking</option>
              <option value="General Building">General Building</option>
              <option value="Computer">Computer</option>
              <option value="Staff">Staff</option>
            </select>
          </div>
          <br />
          <p>Ticket description : </p>
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
