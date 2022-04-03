import React from "react";
import Profile from "./Profile/Profile";
import Img from "./Profile/profile.png";
import './App.css';

export default function App() {
    function handleName(name) {
      alert(`Hello my name is ${name}`);
    }
  return (
    
    <div className="App">
      <Profile
        fullName=" Bahri Abir"
        bio=" developer "
        profession="electronics engineer"
        handleName={handleName}
      >
         <img
          
          src={Img}
          alt="imgpro"
        />
      </Profile>
    </div>
  );
}
