import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdDownload } from "react-icons/md";
export default function Navbar() {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'public/Cristian-Alonso-Rozas-Carrasco-Resume.pdf'; // Ruta del archivo en la carpeta public
    link.download = 'cristian-rozas-resume.pdf'; // Nombre con el que se descargará
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


    return (
      <>
      <header className="flex justify-center items-center relative">
        <div className="bg-gray-800/80 top-0 z-10 m-3 rounded-full fixed">
          <div className="container sticky mx-auto flex flex-wrapxs flex-col md:flex-row items-center justify-center">
            <nav className=" md:ml-4 md:py-1 md:pl-4  md:border-gray-700	flex flex-wrap items-center text-base justify-between">
            <a href="#" className="mr-5 text-white hover:bg-violet-500 px-4 py-2 rounded-full transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ">
                Home
              </a>
              <a href="#about" className="mr-5 text-white hover:bg-violet-500 px-4 py-2 rounded-full transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ">
                About me
              </a>
              <a href="#services" className="mr-5 hover:bg-violet-500 px-4 py-2 rounded-full text-white transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ">
                Services
              </a>
              <a className="title-font font-medium text-white mb-4 md:mb-0 mx-5 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 ">
                <a href="#about" className="ml-3 text-xl text-white flex p-2">
                  <img src="/img/cristian rozas copy.png" alt="" className="w-28"/>
                </a>
              </a>
              <a
              href="#projects"
              className="mr-5 text-white hover:bg-violet-500 px-4 py-2 rounded-full transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ">
              Projects
              </a>
              <a
              href="#skills"
              className="mr-5 text-white hover:bg-violet-500 px-4 py-2 rounded-full transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ">
              Skills
              </a>
              <div className="flex justify-center items-center mr-5 text-white bg-violet-500 px-4 py-2 rounded-full transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 "> 
                <a
                onClick={handleDownload}
                href="#resume"
                className="mx-2">
                Resume
                </a>
                <MdDownload />
              </div>
            </nav>
            {/* <div className="inline-flex justify-between w-28">
              Crear un div con un hover que se abran todas las redes hacia abajo
              <a href="https://www.linkedin.com/in/cristianrozas"><FaLinkedin size={30} className="hover:text-violet-500 text-white"/></a>
              <a href="https://www.github.com/cristianrozas-cr"><FaGithub size={30} className="hover:text-violet-500 text-white"/></a>
              <a href="https://www.gmail.com"><MdEmail size={30} className="hover:text-violet-500 text-white" /></a>
            </div> */}
          </div>
        </div>
      </header>
      </>
    )
  }
  
  