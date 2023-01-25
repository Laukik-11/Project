import React from "react";
import ContactForm from "./ContactForm";
import teamimg from "../assets/person-smartphone-office-table.jpeg"

function ContactBody(){
    return(
        <>
        <img className="contactImg" src={teamimg}
         alt="" />
         <ContactForm />
        </>
    )
}

export default ContactBody