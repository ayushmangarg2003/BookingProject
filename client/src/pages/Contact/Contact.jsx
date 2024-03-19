import React, { useRef, useState } from 'react'
import "./Contact.css"
import Animation from '../../components/Animation/Animation'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  var templateParams = {
    name: name,
    email: email,
    subject: subject,
    message: message,
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send('service_e3nsjza', 'template_hwv4lij', templateParams, {
        publicKey: '8venrGo7Aw_T78iEZ',
      })
      .then(
        () => {
          setName("")
          setEmail("")
          setSubject("")
          setMessage("")
          toast("Message Sent Successfully");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <>
      <Animation />
      <div className="contact-container">
        <div className="section-heading">CONTACT</div>
        <div className='contact-parent'>
          <form ref={form} onSubmit={sendEmail} className='contact-form'>
            <div className='form-left'>
              <input required value={name} onChange={(e) => setName(e.target.value)} className='form-input' placeholder="Your Name" />
              <input required value={email} onChange={(e) => setEmail(e.target.value)} type='email' className='form-input' placeholder="Your Email" />
              <input required value={subject} onChange={(e) => setSubject(e.target.value)} className='form-input' placeholder="Subject" />
            </div>
            <div className='form-right'>
              <textarea required value={message} onChange={(e) => setMessage(e.target.value)} className='form-textarea' placeholder="Your Message" />
              <button className='form-btn'>Send</button>
            </div>
          </form>
          <ToastContainer position="bottom-center" />
        </div>
      </div>
    </>

  )
}

export default Contact