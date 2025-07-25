import React from "react";
import html from "../assets/html3.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import recat from "../assets/recat.png";
import java from "../assets/java.png";
import postman from "../assets/postman.png";
import excel from "../assets/excel.png";
import python from "../assets/python.jpeg";
import git from "../assets/git.png";
import bootstrap from "../assets/bootstrap.jpeg";
import talwind from "../assets/talwind.png";

export default function Experience() {
  const cardItems = [
    {
      id: 1,
      logo: html,
      name: "Html",
    },
    {
      id: 2,
      logo: css,
      name: "Css",
    },
    {
      id: 3,
      logo: js,
      name: "Js",
    },
    {
      id: 4,
      logo: recat,
      name: "React",
    },
    {
      id: 5,
      logo: java,
      name: "Java",
    },
    {
      id: 6,
      logo: postman,
      name: "Postman",
    },
    {
      id: 7,
      logo: excel,
      name: "Excel",
    },
    {
      id: 8,
      logo: python,
      name: "Python",
    },
    {
      id: 9,
      logo: git,
      name: "Git",
    },

    {
      id: 10,
      logo: bootstrap,
      name: "Bootstrap",
    },
    {
      id: 11,
      logo: talwind,
      name: "Talwind",
    },
  ];
  return (
    <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 my-16">
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <span className="font-semibold">
          I've more than 1.5 years of Experience in below Technologies
        </span>

        <div  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 my-8 ">
          {cardItems.map(({ id, logo, name }) => (
            <div
            className="flex flex-col items-center justify-center bg-white shadow-md rounded-xl p-4 hover:scale-105 transition-all duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[150px] h-[150px] border-[1px] rounded-full"
                alt=""
              />
              <div>
                <div className="text-xl">
                  {name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
