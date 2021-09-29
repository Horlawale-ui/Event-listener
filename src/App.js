import React, {useState} from 'react';
import './App.css';
import Modal from './about';

function App() {
  const [show, setShow] = useState(false)


  return (
   <div classname="App">
    <button onClick={() => setShow(true)}>Show Modal</button>
    <Modal onClose={() => setShow(false)} show={show}/>
    </div>
  );
}


export default App;
