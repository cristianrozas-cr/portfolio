import { FaLaptopCode } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { MdOutlineWeb } from "react-icons/md";


export default function Services() {
    return (
      <>
          <section id="services" className="text-gray-400 bg-gray-900 body-font rounded-lg">
      <div className="container py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            My Services
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          As a software developer and web designer, I offer comprehensive solutions to help you stand out in the digital environment. My services are designed to cover all your project needs, from initial design to functionality and online visibility.
          </p>
        </div>
        <div className="flex justify-around flex-wrap">
            <div className="bg-white w-64 h-64 mx-2 rounded-lg flex flex-col items-center justify-center p-3 text-black mb-8">
            <MdDesignServices color="black" size={100}/>
              <h3 className="mb-2 font-bold">Web Design</h3>
              <p>I create websites that are visually stunning, responsive and aligned with your brand identity, guaranteeing an exceptional user experience.</p>
            </div>
            <div className="bg-white w-64 h-64 mx-2 rounded-lg flex flex-col items-center justify-center p-3 text-black mb-8">
              <MdOutlineWeb color="black" size={100}/>
              <h3 className="mb-2 font-bold">Web Development</h3>
              <p>I develop fast, secure and optimized websites, using modern technologies to ensure your site meets the highest standards.</p>
            </div>
            <div className="bg-white w-64 h-64 mx-2 rounded-lg flex flex-col items-center justify-center p-3 text-black mb-8">
              <FaLaptopCode color="black" size={100}/>
              <h3 className="mb-2 font-bold">Full Stack Development</h3>
              <p>From frontend to backend, I build complete, scalable and customized web applications to meet your business needs.</p>
            </div>
            <div className="bg-white w-64 h-64 mx-2 rounded-lg flex flex-col items-center justify-center p-3 text-black mb-8">
              <FaLaptopCode color="black" size={100}/>
              <h3 className="mb-2 font-bold">SEO Optimization</h3>
              <p>Technical and content optimizations to improve your page ranking in search engines, increasing visibility and traffic.</p>
            </div>
            <div className="bg-white w-64 h-64 mx-2 rounded-lg flex flex-col items-center justify-center p-3 text-black mb-8">
              <FaLaptopCode color="black" size={100}/>
              <h3 className="mb-2 mt-2 font-bold">Digital Marketing Strategies</h3>
              <p>I help your brand reach the right audience through customized strategies that combine social media, content and data analysis.</p>
            </div>
        </div>
      </div>
    </section>
      </>
    )
  }
  
  