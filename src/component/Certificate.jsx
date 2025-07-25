import React from "react";
import FullStack from "../assets/Full-stack certificate.png";
import Aws from "../assets/Aws Certificate.png";
import { useState } from "react";

const Certificate = () => {
    const [selectedImage, setSelectedImage] = useState(null);
  const certiicateItem = [
    {
      id: 1,
      img: FullStack,
      name: "Full-Stack Development",
    },

    {
      id: 2,
      img: Aws,
      name: "Aws-Cloud Practionior",
    },
  ];
  return (
    <>
      {/* <div className="max-w-screen-2*1 container  mx-auto px-4 md:px-20 my-20">
        <h1 className="text-3xl font-bold mb-5">Certificate </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 my-8 ">
          {certiicateItem.map(({ id, name, img }) => (
            <div
              className="flex flex-col items-center justify-center bg-white shadow-md rounded-xl p-4 sm:hover:scale-105 transition-all duration-300"
              key={id}
            >
          
                <img src={img} alt="" 
                  className="w-[full] h-[full] border-[1px]"
                  />
              <div className="text-xl">
              {name}
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
  <h1 className="text-3xl font-bold mb-5">Certificate</h1>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 my-8">
    {certiicateItem.map(({ id, name, img }) => (
      <div
        key={id}
         onClick={() => setSelectedImage(img)}
        className="group flex flex-col items-center justify-center bg-white shadow-lg rounded-xl p-4 transition-all duration-300 hover:scale-105"
      >
        <img
          src={img}
          alt={name}
          className="w-full h-40 object-cover rounded-md border border-gray-300 group-hover:shadow-xl transition-all duration-300"
        />
        <div className="mt-3 text-lg font-medium text-gray-700 text-center">
          {name}
        </div>
      </div>
    ))}

     {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-white p-4 rounded-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing on image click
          >
            <img
              src={selectedImage}
              alt="Full View"
              className="max-w-[500px] max-h-[500px] rounded-md shadow-2xl"
            />
            <button
              className="block mx-auto mt-4 text-red-500 font-semibold hover:underline"
              onClick={() => setSelectedImage(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
  </div>
</div>

    </>
  );
};

export default Certificate;
