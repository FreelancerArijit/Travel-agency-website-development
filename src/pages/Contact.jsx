import React from 'react'
import TogglerButton from '../components/TogglerButton'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
function Contact() {

  const form = useRef();

  function sendEmail(e){
    e.preventDefault();

    if(document.querySelector("#number").value.length > 10){
      alert("Mobile numbre should be 10 digits");
    }else{
    emailjs.sendForm("service_hn3omro", 'template_7dfk88b', '#myForm', 'W9VyatDd1DntXDNPv').then(
  (response) => {
    alert('Your message sent successfully', response.status, response.text);
    document.querySelectorAll("input, textarea").forEach(elm => elm.value = "");
  },
  (error) => {
    alert('Something went wrong, try again later...', error); 
  },
);

    }




  }

  return (
    <>
    <div className="contact-section">
      <h2>Contact Us</h2>
      <strong>Kindly fill the form if you have any query</strong>
      <div className="form-body">
        <form ref={form} onSubmit={sendEmail} id="myForm">
          <input type="text" required name="name" id="name" placeholder='Enter your name' />
          <input type="number" required name="number" id="number"placeholder='Enter your mobile number' />
          <input type="email" required name="email" id="email" placeholder='Enter your email address' />
          <textarea name="message" required id="message" cols="30" rows="8" placeholder='Enter your query'></textarea>
        <TogglerButton type="submit" text="Send Message" />
        </form>
      </div>
    </div>
      
    </>
  )
}

export default Contact
