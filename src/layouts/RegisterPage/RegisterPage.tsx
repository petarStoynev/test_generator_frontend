import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import './style/register-page.css'


import { register } from "../services/auth-service";

export const RegisterPage: React.FC = () => {
  const [successful, setSuccessful] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const[firstname,setFirstname] = useState('');
  const[lastname,setLastname] = useState('');
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');

  function firstnameChange(e:any){
    e.preventDefault();
    setFirstname(e.target.value);
  }

  function lastnameChange(e:any){
    e.preventDefault();
    setLastname(e.target.value);
  }

  function emailChange(e:any){
    e.preventDefault();
    setEmail(e.target.value);
  }

  function passwordChange(e:any){
    e.preventDefault();
    setPassword(e.target.value);
  }


  
  

  const handleRegister = (e:any) => {

   

    register(firstname,lastname,email,password)
    e.preventDefault();
    
  };

  return (
    <section className="register-sec">

   <div className="register-div">
    <form onSubmit={handleRegister}>

    
        <label htmlFor="">First Name:</label>
        <input type="text" onChange={firstnameChange}/>


        <label htmlFor="">Last Name:</label>
        <input type="text" onChange={lastnameChange} />


        <label htmlFor="" >Email:</label>
        <input type="text" id="register-input-email" onChange={emailChange}/>


        <label htmlFor="">Password</label>
        <input type="password" id="register-input-pass" onChange={passwordChange} />

        <button className="button-30" role="button" type="submit">Register</button>
        

        </form>

   </div>
   </section>

  )
};