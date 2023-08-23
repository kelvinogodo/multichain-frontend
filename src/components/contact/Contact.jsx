import React from 'react'
import './contact.css'
import {ImMail} from 'react-icons/im'
import {FaPhone,FaTelegramPlane,FaTelegram} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import {FiMail} from 'react-icons/fi'
import { useState ,useRef} from 'react'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
const Contact = () => {
    
    // sweet alert function 
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2ljiy8n', 'template_hr6ase7', form.current, 'u__c9CcKEVKgaRN5U')
        .then((result) => {
            console.log(result.text);
            Toast.fire({
                icon: 'success',
                title: 'Email sent successfully'
              })
        }, (error) => {
            console.log(error.text);
            Toast.fire({
                icon: 'error',
                title: 'something went wrong'
              })
        });
    };


  return (
    <div className='contact-section' id='contact'>
        <div className="about-wrapper">
        <div className="why-choose-us-text-container about-text contact-p" >
            <div className="header" data-aos="fade-up">
                <span className="header-line"></span>
                <h3>contact us</h3>
            </div>
            <h1 data-aos="fade-up">get in touch</h1>
            <p data-aos="fade-up">
                Any question? Reach out to us and we’ll get back to you shortly.
                  </p>
            <div className="contact-svg-container" data-aos="fade-up">
                <a href="http://t.me/multichainfinance1" target='blank' data-aos="fade-up"><FaTelegram /></a>
                <a href="mailto:multichainfinance@gmail.com" target='blank' data-aos="fade-up"><ImMail /></a>
            </div>
        </div>
        <div className="contact-form-container">
        </div>
        </div>
    </div>
  )
}

export default Contact