import React from 'react'
import { useEffect } from 'react';
import './Modal.css'

const Modal = (props) => {

    //such that the modal closes on pressing esc key.

    useEffect(() => {
        document.onkeydown = (evt) => {
            if (evt.keyCode === 27) {
                props.onClose();
            }
        };
    })

    if(!props.show){
        return null;
    }

  return (
    <div>
        <div className="modal" onClick={props.onClose}>
            <div className="modal_content" onClick={e => e.stopPropagation()}>
                <div className="modal_header">
                    <h1 className="modal_title">{props.title}</h1>
                </div>
                <div className="modal_body">
                    {props.children}
                </div>
                <div className="modal_footer">
                    <button className='button' onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal