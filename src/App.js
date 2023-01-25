import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
//file imports
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import ContactBody from './components/ContactBody';
import './styles/reset.css';
import './styles/styles.css'



function Home(){
  return(
    <>
    <Header />
    <Body />
    <Footer />
    </>
  )
}
function Contact(){
  return(
    <>
    <Header />
    <ContactBody />
    <Footer />
    </>
  )
}



function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
