import React, { useEffect, useState } from "react";
import Popup from "./components/Popup";

function Tickets() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
      <div className="Tickets">
        <main>
          <br />
          <button onClick={() => setButtonPopup(true)}>New Ticket</button>
        </main>

        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
      </div>
    </>
  );
}
export default Tickets;
