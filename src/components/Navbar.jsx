import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function Navbar() {

    return (
      <>
      <header className="flex justify-center items-center">
        <div className="bg-gray-800 top-0 z-10 m-3 rounded-full w-2/3">
          <div className="container sticky mx-auto flex flex-wrapxs flex-col md:flex-row items-center justify-center">
            <nav className=" md:ml-4 md:py-1 md:pl-4  md:border-gray-700	flex flex-wrap items-center text-base justify-between">
            <a href="#projects" className="mr-5 text-white hover:bg-violet-500 px-4 py-2 rounded-full">
                Home
              </a>
              <a href="#projects" className="mr-5 text-white hover:bg-violet-500 px-4 py-2 rounded-full">
                About me
              </a>
              <a href="#services" className="mr-5 hover:bg-violet-500 px-4 py-2 rounded-full text-white">
                Services
              </a>
              <a className="title-font font-medium text-white mb-4 md:mb-0 mx-5">
                <a href="#about" className="ml-3 text-xl text-white">
                  C R
                </a>
              </a>
              <a
              href="#projects"
              className="mr-5 text-white hover:bg-violet-500 px-4 py-2 rounded-full">
              Projects
              </a>
              <a
              href="#resume"
              className="mr-5 text-white hover:bg-violet-500 px-4 py-2 rounded-full">
              Download CV
              </a>
            </nav>
            <div className="inline-flex justify-between w-28">
              {/* Crear un div con un hover que se abran todas las redes hacia abajo */}
              <a href="https://www.linkedin.com/in/cristianrozas"><FaLinkedin size={30} className="hover:text-violet-500 text-white"/></a>
              <a href="https://www.github.com/cristianrozas-cr"><FaGithub size={30} className="hover:text-violet-500 text-white"/></a>
              <a href="https://www.gmail.com"><MdEmail size={30} className="hover:text-violet-500 text-white" /></a>
            </div>
          </div>
        </div>
      </header>
      </>
    )
  }
  
  