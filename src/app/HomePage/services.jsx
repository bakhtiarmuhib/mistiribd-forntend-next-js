import React from "react";
import "./services.css";

export default function services() {
  return (
    <section class="services">
      <h2 className="services-titel">Service</h2>
      <div class="container">
        <div class="service">
          <div>
            <h2>Service 1</h2>
          </div>
          <div className="avolobal">
            <h2>120</h2>
          </div>
        </div>
        <div class="service">
          <div>
            <h2>Service 2</h2>
          </div>
          <div className="avolobal">
            <h2>500</h2>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="service">
          <div>
            <h2>Service 3</h2>
          </div>
          <div className="avolobal">
            <h2>21</h2>
          </div>
        </div>
        <div class="service">
          <div>
            <h2>Service 4</h2>
          </div>
          <div className="avolobal">
            <h2>31</h2>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="service">
          <div>
            <h2>Service 3</h2>
          </div>
          <div className="avolobal">
            <h2>21</h2>
          </div>
        </div>
        <div class="service">
          <div>
            <h2>Service 4</h2>
          </div>
          <div className="avolobal">
            <h2>31</h2>
          </div>
        </div>
      </div>
      <div class="pagination">
        <a href="#">&laquo; Prev</a>
        <a class="active" href="#">
          1
        </a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">Next &raquo;</a>
      </div>
    </section>
  );
}
