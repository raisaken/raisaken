import { useState } from "react";
import './Modal.css'; // Assuming you have some basic styles for the modal

export default function Modal({ show, onClose, onSubmit }) {
    const [modalInput, setModalInput] = useState('');
  
    if (!show) {
      return null;
    }
  
    const handleSubmit = () => {
      onSubmit(modalInput);
      onClose();
    };
  
    return (
      <div className="modal-overlay">
        <div className="modal">
          <h2>Enter Something</h2>
          <input
            type="text"
            value={modalInput}
            onChange={(e) => setModalInput(e.target.value)}
            placeholder="Enter text here"
          />
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }