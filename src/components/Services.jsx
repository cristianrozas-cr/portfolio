import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { MdOutlineWeb } from "react-icons/md";


export default function Services() {
    return (
      <>
          <section id="projects" className="text-gray-400 bg-gray-900 body-font rounded-lg">
      <div className="container py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            My Services
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div className="flex justify-around">
            <div className="bg-white w-64 h-64 mx-2 rounded-lg flex flex-col items-center justify-center p-3 text-black">
            <MdDesignServices color="black" size={100}/>
              <h3>Web Design</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, magnam architecto.</p>
            </div>
            <div className="bg-white w-64 h-64 mx-2 rounded-lg flex flex-col items-center justify-center p-3 text-black">
              <MdOutlineWeb color="black" size={100}/>
              <h3>Web Development</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, magnam architecto.</p>
            </div>
            <div className="bg-white w-64 h-64 mx-2 rounded-lg flex flex-col items-center justify-center p-3 text-black">
              <FaLaptopCode color="black" size={100}/>
              <h3>Full Stack Development</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, magnam architecto.</p>
            </div>
        </div>
      </div>
    </section>
      </>
    )
  }
  
  