import React from "react";
import { FiX } from "react-icons/fi";
import "./Modal.css";

function Modal({ children, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        role="dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          <FiX />
        </button>
        {children}
      </div>
    </div>
  );
}

export default React.memo(Modal);
