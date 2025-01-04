

export default function About() {


  return (
    <>
    <section id="about">
      <div className="flex md:flex-row flex-col items-center justify-center mb-20 imagen bg-cover h-screen">
        <div className="lg:flex-grow md:w-full md:h-max lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-left items-center text-center overlay px-20 py-28 ">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-around text-white">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
              Hello, I am <span className="text-violet-500">Cristian Rozas</span>
              <br/> 
              <h2 className="hidden lg:inline-block sm:text-6xl animate-pulse">Software Developer</h2>
              </h1>
              <img src="img/foto de perfil de LinkedIn hombre elegante(1).png" alt="" className="w-1/3"/>
            </div>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus?
          </p>
          </div>
          <div className="flex justify-center ">
            <a
              href="#contact"
              className="inline-flex text-white bg-violet-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg hover:text-white transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
              Contact me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-50 bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-violet-900 hover:text-white rounded text-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
              My projects
            </a>
          </div>
        </div>
        {/* <div className="md:w-1/2 w-5/6 imagen bg-cover bg-center h-96 rounded">
        </div> */}
      </div>
    </section>
    </>
  )
}

