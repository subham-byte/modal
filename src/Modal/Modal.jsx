import React from 'react'
import './Modal.css'

const Modal = (props) => {

    if(!props.show){
        return null;
    }

  return (
    <div>
        <div className="modal">
            <div className="modal_content">
                <div className="modal_header">
                    <h1 className="modal_title">Modal title</h1>
                </div>
                <div className="modal_body">
                    This is modal content.
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