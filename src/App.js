import React from 'react';
import InputBox from './components/InputBox/InputBox'
import ItemList from './components/ItemList/ItemList'
import './App.css';
import pic from "./head.png"
import { Router, Route, Link } from 'react-router-dom'

function App() {

  return (
    <div className="App">
     <img src={pic} />
     <h1>Todo List</h1>
     <InputBox/>
    </div> 
  );
}

export default App;
