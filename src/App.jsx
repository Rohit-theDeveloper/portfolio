import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Project from "./component/Project";
import Experience from "./component/Experience";
import Footer from "./component/Footer";
import Contact from "./component/Contact";
import Resume from "./component/Resume";
import { Toaster } from "react-hot-toast";
import Certificate from "./component/Certificate";
function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Home></Home>
        <About></About>
        <Project />
        <Experience />
        <Certificate/>
        <Resume/>
        <Contact />
        <Footer />
      </div>
      <Toaster/>
    </>
  );
}

export default App;
