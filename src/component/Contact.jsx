import React, { useState } from "react";
import { useForm } from "react-hook-form";

// import bgImage from "../assets/rohit.jpg";
import axios from "axios";
import toast from "react-hot-toast";
export default function Contact() {

   const[isLoading, setIsLoading] =  useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
        
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    
    }
  
    try {
      await axios.post("https://getform.io/f/bronznma", userInfo);
      toast.success("Your Message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }finally {
    setIsLoading(false); 
  }

  };

  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2*1 container mx-auto px-4 md:px-20 my-16 "
        // "max-w-screen-2*1 container  mx-auto px-4 md:px-20  my-16"
      >
        <h1 className="text-3xl font-bold mb-4 ">Contact Me</h1>
        <span>Please fill out the Form below to contact me </span>

        <div>
          <div className="flex flex-col items-center justify-center mt-5">
            <form
              onSubmit={handleSubmit(onSubmit)}
              // action="https://getform.io/f/bronznma"
              // method="post"
              className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
            >
              <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
              <div className="flex flex-col mb-4">
                <label className="block text-gray-700">FullName</label>
                <input
                  {...register("name", { required: true })}
                  className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:shadow-outline  bg-white"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter Your Full Name"
                />
                {errors.name && <p>Name is Required</p>}
              </div>
              <div className="flex flex-col mb-4">
                <label className="block text-gray-700">Email Address</label>
                <input
                  {...register("email", { required: true })}
                  className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:shadow-outline  bg-white"
                  id="name"
                  name="email"
                  type="email"
                  placeholder="Enter Your Email Address"
                />
                {errors.email && <p>Email is required.</p>}
              </div>

              <div className="flex flex-col mb-4">
                <label className="block text-gray-700">Messge</label>
                <textarea
                  {...register("message", { required: true })}
                  className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:shadow-outline bg-white"
                  id="name"
                  name="message"
                  type="text"
                  placeholder="Enter Your Query"
                />
                {errors.message && <p>Message is required.</p>}
              </div>

              <button
        type="submit"
        disabled={isLoading}
        className={`bg-blue-600 text-white font-medium py-2 px-4 rounded flex items-center justify-center gap-2 transition duration-300 
        ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'}`}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              />
            </svg>
            Submitting...
          </>
        ) : (
          "Submit"
        )}
      </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
