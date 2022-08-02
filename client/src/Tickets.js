import Popup from "./components/Popup";
import "../src/Tickets.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Tickets() {
  const [buttonPopup, setButtonPopup] = useState(false);
  
  return (
    <>
      <div>
        <main>
          <br />
          <div className={buttonPopup ? "unclickable" : "tickets"}>
            <button
              className="newticketbutton"
              onClick={() => setButtonPopup(true)}
            >
              Create New Ticket
            </button>
            {/* <button onClick={handleClicking}>View Service</button> */}
          </div>
        </main>

        <Popup trigger={buttonPopup} setTrigger={setButtonPopup} ></Popup>
      </div>
    </>
  );
}
export default Tickets;
