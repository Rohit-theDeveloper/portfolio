import React from "react";

export default function About() {
  return (
    <div
      name="About"
    className="max-w-screen-2xl container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 my-16">
      <h1 className="text-3xl font-bold mb-5">About</h1>
      {/* <p>
        Hello I'm Rohit , a passionate with a keen eye for MERN Stack . with a
        background in IT, I strive to cretae impactful and visually stunning
        software solutions that leave a lasting impression.
      </p> */}
      <p className="w-full text-gray-700 text-base md:text-lg leading-relaxed">
        Hello! I'm <span className="font-semibold text-blue-600">Rohit</span>, a
        passionate web developer with a strong interest in the
        <span className="font-semibold">
          {" "}
          MERN Stack (MongoDB, Express, React, Node.js)
        </span>
        . With a background in IT, I focus on building impactful and visually
        appealing software solutions that not only look good but also solve
        real-world problems. I love turning ideas into reality through clean
        code and creative design.
      </p>
      <br />
      <br />
      <h1 className="text-green-600 font-semibold text-xl text-center md:text-left">
        Education and tranning
      </h1>
      {/* <span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus,
        dolores vel? Modi nam harum maiores libero a quas, omnis praesentium.
      </span> */}
      <div className="max-w-3xl space-y-6  md:text-left">
        {/* MCA */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm mt-5 md:text-left">
          <h3 className="text-xl font-semibold text-blue-600">
            Master of Computer Applications (MCA)
          </h3>
          <p className="text-gray-700">
            Veer Madhov Singh Bhandari Uttarakhand Technical University /Tula's
            Institute (Dehradun)
          </p>
          <p className="text-sm text-gray-500">2023 – 2025</p>
        </div>

        {/* {Bca} */}

        <div className="bg-gray-100 p-4 rounded-lg shadow-sm mt-5 md:text-left">
          <h3 className="text-xl font-semibold text-blue-600">
            Bachelor of Computer Applications (BCA)
          </h3>
          <p className="text-gray-700">
            Babasaheb Bhimrao Ambedkar Bihar University/R.N.College (Haipur)
          </p>
          <p className="text-sm text-gray-500">2019 – 2023</p>
        </div>

        {/* Training */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-blue-600">
            Full-Stack Development Training
          </h3>
          <p className="text-gray-700">Greensoft pvt.ltd (hajipur)</p>
          <p className="text-sm text-gray-500">Jan 2023 – Jun 2023</p>
        </div>
      </div>
      <br />
      <br />
      <h1 className="text-green-600 font-semibold text-xl text-center md:text-left">
        Skills & Expertise
      </h1>
      {/* <span>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
        hic quos perspiciatis alias adipisci dolorum eligendi quod culpa
        repellendus debitis!
      </span> */}
      <p className="w-full  text-gray-600 mb-8  md:text-left">
        I specialize in building modern, responsive, and interactive web
        applications using the latest front-end technologies. I'm passionate
        about clean code, great UI/UX, and continuous learning.
      </p>

      <div className="max-w-4xl mx-auto grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-6 text-gray-800">
        <div className="bg-gray-300 hover:text-white hover:scale-105 hover:bg-blue-400 p-4 shadow rounded-lg">
          HTML5
        </div>
        <div className="bg-gray-300 hover:text-white hover:scale-105 hover:bg-blue-400 p-4 shadow rounded-lg">
          CSS3
        </div>
        <div className="bg-gray-300 hover:text-white hover:scale-105 hover:bg-blue-400 p-4 shadow rounded-lg">
          JavaScript
        </div>
        <div className="bg-gray-300 hover:text-white hover:scale-105 hover:bg-blue-400 p-4 shadow rounded-lg">
          React.js
        </div>
        <div className="bg-gray-300 hover:text-white hover:scale-105 hover:bg-blue-400 p-4 shadow rounded-lg">
          Tailwind CSS
        </div>
        <div className="bg-gray-300 hover:text-white hover:scale-105 hover:bg-blue-400 p-4 shadow rounded-lg">
          Git & GitHub
        </div>
        <div className="bg-gray-300 hover:text-white hover:scale-105 hover:bg-blue-400 p-4 shadow rounded-lg">
          Node.js
        </div>
        <div className="bg-gray-300 hover:text-white hover:scale-105 hover:bg-blue-400 p-4 shadow rounded-lg">
          MongoDB
        </div>
        <div className="bg-gray-300 hover:text-white hover:scale-105 hover:bg-blue-400 p-4 shadow rounded-lg">
          Java
        </div>
        <div className="bg-gray-300 hover:text-white hover:scale-105 hover:bg-blue-400 p-4 shadow rounded-lg">
          Python
        </div>
        <div className="bg-gray-300 hover:text-white hover:scale-105 hover:bg-blue-400 p-4 shadow rounded-lg">
          Excel
        </div>
        <div className="bg-gray-300 hover:text-white hover:scale-105 hover:bg-blue-400 p-4 shadow rounded-lg">
          Power-Bi
        </div>
      </div>

      <br />
      <br />

      <h1 className="text-green-600 font-semibold text-xl text-center md:text-left">
        Professional Experience
      </h1>
      {/* <span>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
        hic quos perspiciatis alias adipisci dolorum eligendi quod culpa
        repellendus debitis!
      </span> */}

      <p className="w-full text-gray-600  md:text-left mb-8">
        I have worked as a Full Stack Developer at{" "}
        <span className="text-blue font-black">Greensoft pvt ltd</span>, where I
        contributed to building scalable and responsive web applications using
        modern technologies. I handled both frontend and backend development,
        ensuring smooth integration and user experience.{" "}
        <span className="text-blue font-black">Also</span> I have hands-on
        experience working on real-world projects during my academic journey and
        training. I’ve built multiple frontend applications using modern
        technologies, and I am confident in handling web development tasks
        independently or in a team.
      </p>

      <div className="max-w-3xl mx-auto text-left space-y-6">
        {/* Sample Entry */}
        <div className="bg-gray-100 p-5 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-blue-600">
            Full-Stack Developer Intern
          </h3>
          <p className="text-gray-700">Greensoft pvt ltd./Offline</p>
          <p className="text-sm text-gray-500">Jan 2023 – Jun 2023</p>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>
              Developed dynamic web applications using the MERN Stack (MongoDB,
              Express, React, Node.js).
            </li>
            <li>
              Designed RESTful APIs and integrated them with React frontend for
              real-time data updates.
            </li>
            <li>
              Implemented responsive UI components with Tailwind CSS and handled
              state management using React Hooks.
            </li>
            <li>
              Worked with MongoDB for database operations and deployed projects
              on cloud platforms.
            </li>
          </ul>
        </div>
      </div>
      <br />
      <br />
      <h1 className="text-green-600 font-semibold text-xl text-center md:text-left">
        Achivements & Awards
      </h1>
      {/* <span>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
        hic quos perspiciatis alias adipisci dolorum eligendi quod culpa
        repellendus debitis!
      </span> */}
      <p className="max-w-full  text-gray-600 text-base md:text-left mb-8">
        Here's a glimpse of some recognitions and certifications that highlight
        my journey in both technical and leadership roles.
      </p>

      <div className="max-w-3xl   md:text-left space-y-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-blue-600">
            Training Certificate - Web Development
          </h3>
          <p className="text-gray-700">
            Completed a structured web development training program covering
            frontend and backend technologies.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-blue-600">
            Winner – Project Exhibition
          </h3>
          <p className="text-gray-700">
            Secured 1st place in a technical project exhibition for my
            innovative web-based solution.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-blue-600">
            AWS Cloud Training Certificate
          </h3>
          <p className="text-gray-700">
            Completed foundational cloud computing training using Amazon Web
            Services (AWS).
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-blue-600">
            Hackathon Participation Certificate
          </h3>
          <p className="text-gray-700">
            Participated in a competitive hackathon event showcasing quick
            problem-solving and team collaboration.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-blue-600">
            Vice Captain – TPL Cricket Tournament
          </h3>
          <p className="text-gray-700">
            Led the team as Vice Captain and contributed to winning the
            campus-level TPL Cricket Tournament.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-blue-600">
            Sanskriti College Fest – Security Head
          </h3>
          <p className="text-gray-700">
            Handled event safety and coordination as Security Head during the
            college cultural fest.
          </p>
        </div>
      </div>

      <br />
      <br />
      <h1 className="text-green-600 font-semibold text-xl text-center md:text-left">
        Mission Statement
      </h1>
      <p className="max-w-full  text-gray-600 text-base md:text-lett leading-relaxed">
        My mission is to continuously grow as a web developer by building
        meaningful, user-centric applications that combine functionality with
        great design. I strive to contribute to innovative projects that make a
        positive impact, while always staying curious, improving my skills, and
        sharing knowledge with the developer community.
      </p>
    </div>
  );
}
