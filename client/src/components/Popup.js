import React from "react";
import "./Popup.css";
import { useState } from "react";

function Popup(props) {

  return props.trigger ? (
    <form >
      <div className="popup">
        <div className=".popup-inner">
          <button className="close-btn" onClick={() => props.setTrigger(false)}>
            X
          </button>
          <h1>Create Ticket</h1>
          <br />
          <div className="alignment">
            <label for="Ticket Type">Ticket type : </label>
            
          </div>
          <div className="alignment">
            <label for="Severity">Severity : </label>
            
          </div>
          <div className="alignment">
            <label for="Type">Product : </label>
            
          </div>
          <br />
          <p>Ticket description : </p>
          
        </div>
        <div>
          
 
        </div>
        <button className="submit-btn">Submit</button>
      </div>
    </form>
  ) : (
    ""
  );
}

export default Popup;
