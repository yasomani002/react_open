import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './Components/Hooks/Form/Form';
import Home from './Components/Route/Home';
import APIcalling from './Components/Hooks/UseEffect/APIcalling';
import UseEffect from './Components/Hooks/UseEffect/UseEffect';
import Todolist from './Components/Hooks/UseState';
import UseStateObject from './Components/Hooks/UseState';
import UseStateArray from './Components/Hooks/UseState';
import UseState from './Components/Hooks/UseState';
import UseToggle from './Components/Hooks/UseToggle';
import { Route, Routes } from "react-router-dom";
import Service from './Components/Route/Service';
import Contact from './Components/Route/Contact';
import NavBar from './Components/Route/NavBar';
import UseMemo from './Components/Hooks/UseMemo';
import Login from './Components/Pages/Login';


function App() {
  return (
    <>

      {/* <UseMemo /> */}

      <Login />

    </>
  );
}

export default App;
