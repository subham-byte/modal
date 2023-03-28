import Modal from './Modal/Modal';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className='App'>
      <button onClick={() => setShow(true)} className="but">Show Modal</button>
      <Modal onClose = {() => setShow(false)} show = {show}/>
    </div>
  );
}

export default App;
