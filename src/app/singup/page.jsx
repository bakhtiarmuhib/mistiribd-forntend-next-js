"use client"
import React, { useState } from "react";
import "./singup.css";

export default function page() {
    const [togol,setTogol]=useState();

    const user=()=>{
        setTogol(true)
    }
    const services=()=>{
        setTogol(false)
    }
  return (
    <div className="sinup">
      <h1 className="sinup-fst">Join as a client or freelancer</h1>
      <div class="radio-container">
        <div class="radio-option">
          <input type="radio" id="option1" name="radio-option" />
          <label className="option" for="option1" onClick={user}>
            <img src="" alt="Image 1" />
            <span>I’m a User, hiring for a project</span>
          </label>
        </div>
        <div class="radio-option">
          <input type="radio" id="option2" name="radio-option" />
          <label className="option" for="option2" onClick={services}>
            <img src="" alt="Image 2" />
            <span>I’m a service provider, looking for work</span>
          </label>
        </div>
      </div>
      {
        
        togol ? <a href="#" class="custom-button" >Join as a user</a> :<a href="#" class="custom-button">Join as a Service provider</a>
      }
      
      <h4 className="sinup-footer">Already have an account? <a href="" class="log">Lon In</a></h4>
    </div>
  );
}
