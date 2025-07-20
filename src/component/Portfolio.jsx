import React from "react";
import sms from "../assets/sms.jpeg";
import lms from "../assets/lms.jpeg";
import smp from "../assets/smp.jpeg";
import todo from "../assets/todo.jpeg";

export default function () {
  const cardItems = [
    {
      id: 1,
      logo: sms,
      name: "SMS(School Management System)",
      par: `A full-stack web app built with the MERN stack that manages student, teacher, and librarian data.
            Includes role-based login modules and CRUD functionalities for academic records.
            Designed to simplify and digitize educational data handling in schools or colleges..`,
    },
    {
      id: 2,
      logo: lms,
      name: " LMS(Library Management System)",
      par: ` A digital library system to manage books, users, and issue-return operations.
              Supports librarian login, book inventory, and member details.
              Built using Node.js, Express, MongoDB, and a responsive frontend.`,
    },
    {
      id: 3,
      logo: smp,
      name: "SMA(Social Media App)",
      par: `A basic social media app developed using React and React Hooks.
            Users can create and delete posts using dummy APIs.
            Clean UI and functional design ideal for frontend demonstration.`,
    },
    {
      id: 4,
      logo: todo,
      name: "TA(Todo-App)",
      par: `A simple and intuitive ToDo application to manage daily tasks.
            Add, delete, edit, and mark tasks as complete.
            Developed using React.js with local storage and a responsive UI.`,
    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2*1 container  mx-auto px-4 md:px-20  mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects</h1>
        <span className="underline font-semibold">Features Projects</span>

        <div className="h-[auto] w-[full]">
          <div className="grid grid-cols-1 md:grid-cols-3 md:space-y-0  bg-white md:h-[auto]">
            {cardItems.map(({ id, logo, name, par }) => (
              <div
                className="md:w-[300px] h-[auto] md:space-y-0  md:space-x-0 border-full space-y-0 shadow-2xl md:my-10 md:mx-10 items-center justify-center p-8 cursor-pointer md:hover:scale-105 duration-300"
                key={id}
              >
                <img
                  src={logo}
                  className="w-[100px] h-[100px] p-1 rounded-full border-[2px]"
                  alt=""
                />
                <div>
                  <div className="font-bold text-xl mb-2 px-2">{name}</div>
                </div>
                <div>
                  <p className="text-justify">{par}</p>
                </div>
                <div className="my-3 p-5px justify-between">
                  <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-2 rounded  m-2"
                  >
                    video
                  </button>
                  <button
                    type="button"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold px-2 py-2 rounded"
                  >
                    Source Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
