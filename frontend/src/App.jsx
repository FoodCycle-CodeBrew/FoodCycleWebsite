import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios';

import './App.css'

function App() {

    function getItem() {
        axios.get('http://localhost:5174').then(res => {
            console.log(res.data);
        })
    }

  return (
    <div className="App">
     
      <h1>Vite + React</h1>
      <button onClick={getItem}>Click me</button>
      
    </div>
  )
}

export default App
