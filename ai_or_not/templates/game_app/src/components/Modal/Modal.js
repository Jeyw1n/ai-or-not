import React from "react";
import "./Modal.css";
import { IoMdClose } from "react-icons/io";

function Modal({isOpen, onClose, children}) {
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-wrapper">
            <div className="modal-content">
              <button className="modal-close-button" onClick={() => onClose()}>
              <IoMdClose style={{fontSize: "4vh"}} />
              </button>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
