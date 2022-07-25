import React, { useState } from "react";
import Popup from "./components/Popup";
import "../src/Tickets.css";

function Tickets() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
      <div className="Tickets">
        <main>
          <br />
          <button
            className="newticketbutton"
            onClick={() => setButtonPopup(true)}
          >
            Create New Ticket
          </button>
        </main>

        <Popup trigger={buttonPopup} setTrigger={setButtonPopup} ></Popup>
      </div>
    </>
  );
}
export default Tickets;
