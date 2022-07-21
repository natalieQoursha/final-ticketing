import React from "react";
import "./Popup.css";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className=".popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          X
        </button>
        <h1>Create Ticket</h1>
        <br />
        <div className="alignment">
          <label for="Ticket Type">Title : </label>
          <input></input>
        </div>

        <div className="alignment">
          <label for="Severity">Severity : </label>
          <select name="Severity" id="Severity">
            <option value="Not Important">Least Important</option>
            <option value="Important">Important</option>
            <option value="Very Important">Very Important</option>
          </select>
        </div>

        <div className="alignment">
          <label for="Role">Role : </label>
          <select name="Role" id="Role">
            <option value="Human Resources">Human Resources</option>
            <option value="Networks">Networks</option>
            <option value="Developer">Developer</option>
          </select>
        </div>

        <div className="alignment">
          <label for="Type">Type : </label>
          <select name="Type" id="Type">
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
        <textarea className="txta"></textarea>
        <br></br>
      </div>
      <button className="submit-btn" onClick={() => props.setTrigger(false)}>
        Submit
      </button>
    </div>
  ) : (
    ""
  );
}

export default Popup;
