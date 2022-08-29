import React, { useState } from "react";
import "./Modal.css";

export default function Modal(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  {
    if (!modal)
      return (
        <>
          <button onClick={toggleModal} className="btn-modal">
            View more
          </button>
        </>
      );
  }
  {
    if (modal) {
      return (
        <div className="whole">
          <div className="design">
            <div className="overlay">
              <div
                className="modal-content"
                style={{
                  background: "white",
                }}
              >
                <p className="popuptitle">More</p>
                <p className="popupcontent">
                  Ticket ID: {props.prop.Ticket_ID}
                </p>
                <p className="popupcontent">
                  Ticket Description: {props.prop.Description}
                </p>
                <p className="popupcontent">Ticket Reply: {props.prop.Reply}</p>
                <p className="popupcontent">
                  Submitted on: {props.prop.Created_On}
                </p>
                <button
                  className="close-modal"
                  style={{
                    background: "#9C9EFE",
                    color: "white",
                    border: "none",
                  }}
                  onClick={toggleModal}
                >
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
