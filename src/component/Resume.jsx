import React from "react";

export default function Resume() {
  return (
    <div className="max-w-screen-2*1 container  mx-auto px-4 md:px-20 my-20">
      <div className="text-center mt-6">
        <a
          href="../assets/RohitKumarWD.pdf"
          download="Rohit_Kumar_Resume.pdf"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-300"
        >
          📄 Download Resume
        </a>
      </div>
    </div>
  );
}
