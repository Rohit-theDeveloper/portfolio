import React, { useState } from "react";
import pic from "../assets/rohit.jpg";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import {Link} from "react-scroll"
export default function Navbar() {
  const [Menu, setMenu] = useState(false);
  const navItem = [
    {
      id: 1,
      text:"Home",
    },
    {
      id: 2,
      text:"About",
    },
    {
      id: 3,
      text:"Project",
    },
    {
      id: 4,
      text:"Experience",
    },
    {
      id: 5,
      text:"Contact",
    },
];  
  return (
    <>
      <div className="w-full fixed top-0 left-0 right-0 h-16 bg-white shadow-md z-50 px-0"
>
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img src={pic} className="h-12 w-12 rounded-full" alt=""></img>
            <h1 className="font-semibold text-xl cursor-pointer">
              Rohi<span className="text-green-500  text-2xl">t</span>
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>
          {/* Desktop nav bar */}
          <div className="pr-8">
            <ul className=" hidden  md:flex space-x-8">
              {navItem.map(({id,text}) => (
                <li className="hover:scale-105 cursor-pointer " key= {id}>
                  <Link to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  >{text}</Link></li>
              ))}
            </ul>
            <div onClick={() => setMenu(!Menu)} className="md:hidden">
              {!Menu ? <IoMenu size={24} /> : <IoClose size={24} />}
            </div>
          </div>
        </div>

        {/* mobile nav baar */}
        {Menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center">
              {navItem.map(({id,text}) => (
                <li className="hover:scale-105 cursor-pointer " key= {id}>
                  <Link 
                  onClick={() => setMenu(!Menu)}
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  >{text}</Link></li>
              ))}
            </ul>
          </div>
        )}
      
      </div>
    </>
  );
}
