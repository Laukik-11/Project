import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { Form } from "react-bootstrap";
import '../styles/form.css'

export default function ContactForm(){

    // const form = useRef();
    
    const [data, setdata] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
        console.log(data);
    };

    const navigate = useNavigate();


    const sendEmail = (e) => {
        e.preventDefault();
        // console.log(e.target);
        emailjs.sendForm('service_xzquvhn', 'template_kvr8r4e', e.target, 'uwxNibDqKdfW7lLmh')
        .then((result) => {
            localStorage.setItem("data", JSON.stringify(data));
            navigate("/", { replace: true });
            alert("Submitted Successfully");
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };

    return(
        <div className="container">

            <h1 className="form-title">Contact</h1>

            <Form onSubmit={sendEmail} autoComplete="off" >

                <label  className="label" htmlFor="name">Name</label>
                <input placeholder="Name" type="text"
                  name="name"  value={data.name}
                  onChange={handleChange} />
                
                <label className="label" htmlFor="email">Email</label>
                <input type="email"  name="email" placeholder="123@example.com" value={data.email}
                  onChange={handleChange}
                  required />
                
                <label className="label" htmlFor="message">Comment</label>
                <textarea   name="message" placeholder="Type your views here!" value={data.message}
                  onChange={handleChange}
                  required  />
                
                <input type="submit" />  
            </Form>
            
        </div>
    )
}
