import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import BeforeAfter from "./components/BeforeAfter";

function App() {
  return (
    <div className="App">
    <Navbar/>
   <Hero/>
   <About/>
   <Benefits/>
   <BeforeAfter/>
   <Testimonials/>
   <Pricing/>
   <FAQ/>
<Footer/>

    </div>
  );
}

export default App;
