import React from "react";
import "./user.css";

export default function page() {
  return (
    <div className="sinup">
      <h1 className="sinup-title">Sign up to find work you love</h1>
      <div class="button-container">
        <div class="column">
          <button class="button">Continue with Facebook</button>
        </div>
        <div class="column">
          <button class="button">Continue with Google</button>
        </div>
      </div>
      <div className="or">
        <span className="line"></span>
        <p>or</p>
        <span className="line"></span>
      </div>
      <div>
        <form action="">
          <div className="first-name">
            <div className="name">
              <label htmlFor="">First Name</label>
              <br />
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Last Name</label>
              <br />
              <input type="text" />
            </div>
          </div>
          <div className="other">
            <label htmlFor="">Email</label>
            <br />
            <input type="email" /> <br /><br />
            <label htmlFor="">Password</label>
            <br />
            <input type="password" />
            <br /><br />
            <label htmlFor="">Distic</label>
            <br />
            <select>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </form>
       <div className="account-btn">
       <a href="#" class="custom-button" >Create My Account</a>
       <h4 className="sinup-footer">Already have an account? <a href="" class="log">Lon In</a></h4>
       </div>
      </div>
    </div>
  );
}
