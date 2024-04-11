import Image from "next/image";
import  Navbar from "@/components/Navbar"
import Bg_gradient from "@/components/Bg_gradient";
import { Educationcard } from "@/components/Eduationcard";
import { Projectcards } from "@/components/Projectcards";
import projectdata from "@/data/data.json";
import { SignupForm } from "@/components/Signupform";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Footer from "@/components/Footer";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <div className="bg-black overflow-hidden">
       <TracingBeam className="px-6 z-10" >
        <div className="grid grid-rows-2 " style={{height : "525px"}} id="home">
          <>
            <Navbar/>
          </>
          <div className="relative flex justify-center left-5 sm:left-0 top-36">
            <Bg_gradient/>
          </div>
        </div>
        <Educationcard />
        <div className=" flex justify-center max-w-full  px-2 mt-5 " id="projects">
          <div className="">
            <div className="flex justify-center ">
              <div className="flex justify-center  text-xl w-56 bg-black text-white rounded-full mb-5">
                Projects
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-stretch j gap-2 mb-5 ">
                {Array.isArray(projectdata) ? projectdata.map((ele , index) => (
                    <Projectcards
                      key={index} 
                      title={ele.title} 
                      descriptions={ele.descriptions}
                      link={ele.link}
                />
                )) : null}
            </div> 
          </div>
        </div>
      
        <div className="w-full p-2">
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px]  sm:w-full" id="contact" />
          <SignupForm/>
        </div>
        <Footer/>
      </TracingBeam>  
      <BackgroundBeams/>
    </div>
  );
}
