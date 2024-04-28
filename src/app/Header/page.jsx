import React from 'react'
import "./header.css"

export default function page() {
  return (
    <header>
  <div class="logo">YourLogo</div>
  <nav>
    <ul class="menu">
      <li><a href="#">Menu Item 1</a></li>
      <li><a href="#">Menu Item 2</a></li>
      <li><a href="#">Menu Item 3</a></li>
    </ul>
  </nav>
  <div>
  <button class="login-btn">Login</button>
  <button class="login-btn">Sing up</button>
  </div>
</header>
  )
}
