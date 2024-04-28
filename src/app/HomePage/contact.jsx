import React from 'react'
import "./contact.css"
export default function contact() {
  return (
    <section className='contact'>
        <div className='info-contact'>
            <h2 className='contact-titel'>Contact Information</h2>
            <h5>If you need any help, contact us. Contact information given bellow.</h5>
            <div>
            <h3><img src="" alt="phone" />+880000000000</h3>
            <h3><img src="" alt="Email" />exampule@gmail.com</h3>
            <h3><img src="" alt="Location" />Flat # S-1 (Level-8), House # 07, SS(D), Road # 09, Gulshan-2, Dhaka-1212</h3>
            </div>
        </div>

        <div>
            

            <div class="contact-form">
            <h1>Get in Touch</h1>
            <h4>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</h4>
        <form action="#" method="post">
            <div class="form-group">
                <input type="text" name="name" id="name" placeholder="Your Name" required/>
            </div>
            <div class="form-group">
                <input type="email" name="email" id="email" placeholder="Your Email" required/>
            </div>
            <div class="form-group">
                <input type="tel" name="phone" id="phone" placeholder="Your Phone Number" required/>
            </div>
            <div class="form-group">
                <textarea name="message" id="message" placeholder="Your Message" required></textarea>
            </div>
            <div class="form-group">
                <button type="submit">Send</button>
            </div>
        </form>
    </div>
        </div>
    </section>
  )
}
