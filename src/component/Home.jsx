import React from "react";
import pic from "../assets/rohit.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { ReactTyped } from "react-typed";
export default function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2*1 container  mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row px-5" >
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span>Welcome in My Feed</span>
            <div className="flex space-x-2 md:text-4xl">
              <h1>Hello I am a </h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Coder", "Programmer"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>

            <p className="text-m md:text-md text-justify">
              I craft beautiful and responsive websites using modern
              technologies like HTML, CSS, JavaScript, and React. Passionate
              about building user-friendly interfaces and learning new things
              every day.
            </p>
            <br />
            {/* {media icon} */}
            <div className="flex flex-col items-center justify-between  md:flex-row  space-y-6 md:space-y-1">
              <div className=" space-y-2 ">
                <h1 className="font-bold">Avilable on </h1>
                <ul className="flex space-x-5">
                  <a href="https://www.facebook.com/" target=" ">
                    <li>
                      <FaFacebook className=" text-xl md:text-3xl cursor-pointer" />
                    </li>
                  </a>

                  <a href="https://in.linkedin.com/" target=" ">
                    <li>
                      <FaLinkedin className=" text-xl md:text-3xl cursor-pointer" />
                    </li>
                  </a>
                  <a href="https://www.whatsapp.com/" target=" ">
                    <li>
                      <FaWhatsapp className="  text-xl md:text-3xl cursor-pointer" />
                    </li>
                  </a>
                  <a href="https://www.instagram.com/" target=" ">
                    <li>
                      <FaInstagram className=" text-xl md:text-3xl cursor-pointer" />
                    </li>
                  </a>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold">Currently Work On</h1>
                <div className="flex space-x-5 my-2">
                  <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <IoLogoNodejs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 justify-center items-center ml-25 md:ml-48 md:mt-20 mt-8 order-1  px-15  rounded-2xl">
            <img
              src={pic}
              className="rounded-full   md:w-[350px] md:h-[350px] w-[200px] h-[200px] "
              alt=""
            />
          </div>
        </div>
      </div>
      <hr></hr>
    </>
  );
}
