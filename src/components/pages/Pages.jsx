import React from "react";
import Header from "../common/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Blog from "../blog/Blog";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import Myhouse from "../myhouse/Myhouse";
import SignupForm from "../signUp/SignupForm";  
import LoginForm from "../logIn/LoginForm";    
import AddHouse from "../addhouse/AddHouse";
const Pages = () => {
  return (
    <Router>
      <Header />
      <Routes> {/* Change: Replace Switch with Routes */}
        <Route path="/" element={<Home />} /> {/* Change: Use element prop */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/addhouse" element={<AddHouse/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/myhouse" element={<Myhouse />} />
        <Route path="/signup" element={<SignupForm />} /> 
        <Route path="/login" element={<LoginForm />} />   
      </Routes>
      <Footer />
    </Router>
  );
};

export default Pages;
