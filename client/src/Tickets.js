import React, { useState } from "react";
import Popup from "./components/Popup";
import "../src/Tickets.css";

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
          </div>
        </main>

        <Popup trigger={buttonPopup} setTrigger={setButtonPopup} ></Popup>
      </div>
    </>
  );
}
export default Tickets;
