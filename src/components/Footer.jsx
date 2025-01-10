import { LiaCopyrightSolid } from "react-icons/lia";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    return (
      <>
          <section id="services" className="text-gray-400 bg-gray-900 body-font rounded-lg">
      <div className="container mx-auto flex text-center align-center items-center justify-around">
        <div>
            <p>Developed by <strong>Cristian Rozas</strong></p>
            {/* <p><LiaCopyrightSolid /> 2025</p> */}
        </div>
        <div className="flex justify-center md:justify-end flex-wrap p-2">
            <div className="rounded-lg flex flex-col items-center justify-center text-black m-2 focus:outline-none rounded">
            <a href="https://www.linkedin.com/in/cristianrozas"><FaLinkedin size={30} className="hover:text-violet-500 text-white"/></a>
            </div>
            <div className="rounded-lg flex flex-col items-center justify-center text-black m-2 focus:outline-none rounded">
            <a href="https://www.github.com/cristianrozas-cr"><FaGithub size={30} className="hover:text-violet-500 text-white"/></a>
            </div>
            <div className="rounded-lg flex flex-col items-center justify-center text-black m-2 focus:outline-none rounded">
            <a href="mailto:cristianrozas.cr@gmail.com"><MdEmail size={30} className="hover:text-violet-500 text-white" /></a>
            </div>
        </div>
      </div>
    </section>
      </>
    )
  }
  
  