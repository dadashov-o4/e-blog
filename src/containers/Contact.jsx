import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const formElementi = useRef()

  const sendEmail = function (e) {
    e.preventDefault()
  }

  emailjs
  .sendForm('service_zt24w21', 'template_95i5fjv', formElementi.current, {
    publicKey: 'W5EI8dzZ3mWmirHUl',
  })
  .then(
    () => {
      console.log('SUCCESS!')
      toast.success("mesajiniz gonderildi")
    },
    (error) => {
      console.log('FAILED...', error.text)
      toast.error("serverde xeta yarandi")
    },
  );
  return (
    <div className='d-flex justify-content-center align-items-center konteyner'>
      <form onSubmit={sendEmail} ref={formElementi} className='text-light p-4'>
        <h2 className='p-3'>Get in touch</h2>
        <p className='p-3'>Describe your issue below. Our manager will contact you as soon as possible.</p>

        <div className="form-group my-4">
          <input name='name' type="text" placeholder='Name' className='form-control shadow-none text-white'/>
          {/* htmlFor */}
        </div>

        <div className="form-group py-3">
          <input name='email' type="email" placeholder='Email' className='form-control shadow-none text-white'/>
        </div>

        <div className="form-group mt-3">
          <textarea name='message' placeholder='Message' className='form-control shadow-none text-white'/>
          {/* cols-en   rows-uzunluq */}
        </div>

        <div className="d-flex justify-content-center pt-4">
        <button className='send-btn text-light'>Send</button>
        </div>
        
      </form>
    </div>
  )
}

export default Contact
