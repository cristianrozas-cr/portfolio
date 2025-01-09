import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdDownload } from "react-icons/md";

export default function About() {


  return (
    <>
    <section id="about">
  <div className="flex md:flex-row flex-col-reverse items-center justify-center bg-cover h-screen">
    {/* Contenido del texto */}
    <div className="lg:flex-grow md:w-full md:h-max lg:pr-14 md:pr-16 flex flex-col md:items-center md:text-left items-center text-center overlay">
      <div className="flex md:flex-row flex-col items-center">
        <div className="flex items-center justify-around text-white">
          <div>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
              Hello, I am <span className="text-violet-500">Cristian Rozas</span>
              <br />
              <h2 className="lg:inline-block sm:text-6xl animate-pulse">
                Software Developer
              </h2>
            </h1>
            <div className="flex flex-col md:flex-row justify-center md:align-center md:items-center">
              <a
                href="mailto:cristianrozas.cr@gmail.com"
                className="m-2 flex justify-center align-center items-center text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-violet-600 rounded text-lg hover:text-white transition ease-in-out md:hover:-translate-y-1 md:hover:scale-110 duration-300"
              >
                <MdOutlineEmail className="mr-2 w-100" />
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/cristianrozas/"
                className="m-2 flex justify-center align-center items-center text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-violet-600 rounded text-lg hover:text-white transition ease-in-out md:hover:-translate-y-1 md:hover:scale-110 duration-300"
              >
                <FaLinkedin className="mr-2 w-100" />
                LinkedIn
              </a>
              <a
                href="https://github.com/cristianrozas-cr"
                className="m-2 flex justify-center align-center items-center text-white bg-violet-800 border-0 py-2 px-6 focus:outline-none hover:bg-violet-600 rounded text-lg hover:text-white transition ease-in-out md:hover:-translate-y-1 md:hover:scale-110 duration-300"
              >
                <FaGithub className="mr-2" />
                Github
              </a>
              <a
              href="#resume"
              className="flex md:hidden m-2 flex justify-center align-center items-center text-gray-50 border-0 py-2 px-6 focus:outline-none bg-sky-500 hover:text-white rounded text-lg transition ease-in-out md:hover:-translate-y-1 md:hover:scale-110 hover:bg-violet-600 duration-300">
              Resume
              <MdDownload className="mr-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Imagen */}
    <div className="w-full md:w-2/3 md:mb-0 md:pl-6">
      <img
        src="img/foto de perfil de LinkedIn hombre elegante(1).png"
        alt="Cristian Rozas"
        className="w-2/3 mx-auto md:mx-0 rounded-full"
      />
    </div>
  </div>
</section>
    </>
  )
}

