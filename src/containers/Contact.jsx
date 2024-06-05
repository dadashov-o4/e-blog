import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from "yup";
import { useFormik } from "formik";

const Contact = () => {
  const formElementi = useRef();

  const initialValues = {
    name: "",
    email: "",
    message: ""
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "minimum 3 simvol olmalidir")
      .max(55, "maksimum 55 simvol olmalidir")
      .required("bos buraxila bilmez")
      .matches(/^[^\d]+$/, "reqem daxil edile bilmez"),
    email: Yup.string()
      .email("email standartlara uygun deyil")
      .required("sahe mutleq doldurulmalidir"),
    message: Yup.string()
      .required("sahe mutleq doldurulmalidir")
  });

  const onSubmit = (values) => {
    emailjs.sendForm('service_zt24w21', 'template_95i5fjv', formElementi.current, 'W5EI8dzZ3mWmirHUl')
      .then(
        (result) => {
          toast.success("mesajiniz gonderildi");
          console.log(result);
          formik.resetForm(); // Formu sıfırlamak için
        },
        (error) => {
          toast.error("serverde xeta yarandi");
          console.log(error);
        }
      );
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  });

  return (
    <div className='d-flex justify-content-center align-items-center konteyner'>
      <form onSubmit={formik.handleSubmit} ref={formElementi} className='text-light p-4'>
        <h2 className='p-3'>Get in touch</h2>
        <p className='p-3'>Describe your issue below. Our manager will contact you as soon as possible.</p>

        <div className="form-group my-4">
          <input
            name='name'
            type="text"
            placeholder='Name'
            className='form-control shadow-none text-white'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (<div className='text-danger'>{formik.errors.name}</div>) : null}
        </div>

        <div className="form-group py-3">
          <input
            name='email'
            type="email"
            placeholder='Email'
            className='form-control shadow-none text-white'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (<div className='text-danger'>{formik.errors.email}</div>) : null}
        </div>

        <div className="form-group mt-3">
          <textarea
            name='message'
            placeholder='Message'
            className='form-control shadow-none text-white'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
          {formik.touched.message && formik.errors.message ? (<div className='text-danger'>{formik.errors.message}</div>) : null}
        </div>

        <div className="d-flex justify-content-center pt-4">
          <button type='submit' className='send-btn text-light'>Send</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
