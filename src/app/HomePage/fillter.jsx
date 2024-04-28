import React from 'react'
import "./fillter.css"

export default function fillter() {
  return (
    <section class="search-section">
    <div class="background-image"></div>
    <div class="search-container">
        <select>
            <option>Select Item 1</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
        </select>
        <select>
            <option>Select Item 2</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
        </select>
        <select>
            <option>Select Item 3</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
        </select>
        {/* <input type="text" placeholder="Search..."/> */}
        <button><img src="search-icon.png" alt="Search"/></button>
    </div>
</section>
  )
}
