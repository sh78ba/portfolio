import React from 'react';
import "./contact.css";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => toast("Messege Sent!");

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yrgnmpl', 'template_z42t4s7', form.current, 'wCK8mHXeAHQbeUwNY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    };

  return (
    <section className="contact container section" id='contact'>
      <h2 className="section_title">Get In Touch</h2>

      <div className="contact_container grid">
        <div className="contact_info">
          <h3 className="contact_title">Let's talk about everything!</h3>
          <p className="contact_details">Don't like forms? Send me an email. 👋</p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact_form">
          <div className="contact_form-group">

            <div className="contact_form-div">
              <input type="text" name="user_name" className="contact_form-input" placeholder='Insert your name' />
            </div>

            <div className="contact_form-div">
              <input type="email" name="user_email" className="contact_form-input" placeholder='Insert your email' />
            </div>
        </div>

            <div className="contact_form-div contact_form-area" >
              <textarea name="message" id='' cols="30" rows="10" className='contact_form-input' placeholder="Write your message"></textarea>
            </div>

          <button className='btn'onClick={notify} type="submit" value="Send" >Send Message</button>
          <ToastContainer />
        </form>
      </div>
    </section>

  )
}

export default Contact;