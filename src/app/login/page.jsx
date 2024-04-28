import React from "react";
import "./login.css";

export default function page() {
  return (
    <section className="login">
      <div className="login-box">
        <h1>Log in to .....</h1>
        <div>
          <form action="">
            <br />
            <input type="email" placeholder="Enter your email" /> <br />
            <br />
          </form>
          <div class="button-container">
            <div class="column">
              <button class="button">Continue</button>
            </div>
          </div>
          <div className="or">
            <span className="line"></span>
            <p> or </p>
            <span className="line"></span>
          </div>

          <div class="button-container">
            <div class="column">
              <button class="button">Continue with Facebook</button>
            </div>
            <div class="column google">
              <button class="button">Continue with Google</button>
            </div>
          </div>
          <div>
            <h3> Don't have an Upwork account? </h3>
            <button class="sinup-btn">Sign Up</button>
          </div>
        </div>
      </div>
    </section>
  );
}
