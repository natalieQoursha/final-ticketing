import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
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
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h1>More information</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores? Illum pariatur possimus
              quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
              placeat tempora vitae enim incidunt porro fuga ea.
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      );
    }
  }
}
