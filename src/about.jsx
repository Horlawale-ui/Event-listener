import React from 'react'
import './App.css';

const Modal = props =>  {
  if (!props.show) {
    return null
  }

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
      <div className="modal-header">
        <h3>modeal Header</h3>
      </div>
      <div className="modal-body">
        <p>This is the content of this file </p>
      </div>
      <div className="modal-footer">
        <button onClick={props.onClose}className="button">Close</button>
      </div>
      </div>
    </div>
  );
}

export default Modal;
