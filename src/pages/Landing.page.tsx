import { Navbar } from "../components/Navbar";
import HeroImage3 from "../assets/hero-image-3.jpg"
import BgGrid from "../assets/bg-grid.avif"
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

export function LandingPage(){
    return(
        <div>

            {/* Navbar */}

            <Navbar/>


            <div 
            style={{
                backgroundSize: "cover",
            }}
            
            className="flex flex-col justify-center items-center px-4 border-b ">
            <div className="bg-white/10 backdrop-blur flex flex-col justify-center items-center px-4 w-screen relative">

                    <h1 className="text-6xl font-semibold text-center my-10 tracking-tighter leading-14 md:text-8xl md:leading-22 md:max-w-4xl">
                        Loan Scheduling and Management made Easy
                    </h1>

                    <p className="text-center text-xl text-gray-400 my-4 md:my-14 md:text-xl md:max-w-4xl">
                    "Tired of complex, time-consuming, frustrating, and inefficient loan schedulers that drain your energy with endless paperwork, confusing calculations, and rigid repayment structures?
                    </p>

                    <Link to={'/signup'}>
                        <button className="bg-black text-white font-bold mt-8 py-2 px-4 rounded-2xl mb-20 ">
                            Learn More
                        </button>
                    </Link>


            </div>
            </div>


            <div
            style={{
                backgroundImage: `url(${BgGrid})`,
                backgroundSize: "cover",
            }}className=" border-b bg-blur">
            <div className="bg-white/10 backdrop-blur flex flex-col justify-center items-center px-4 w-screen">

                    <h1 className="text-5xl font-semibold text-center my-6 tracking-tighter leading-11 md:text-8xl md:leading-28 md:max-w-5xl">
                        One Stop Loan Scheduler and Manager
                    </h1>

                    <p className="text-center mb-10 text-xl text-gray-400 my-4 md:my-14 md:max-w-4xl">
                    Our platform simplifies loan scheduling with seamless automation, effortless customization, and real-time tracking—so you can focus on what truly matters!"
                    </p>

                    <div className="flex justify-center items-center flex-col  ">

                        <div>
                            <Link to={'/signup'}>
                            <button className="bg-black text-white font-bold py-2 px-4 rounded-2xl ">
                                Get Started
                            </button>
                            </Link>
                        </div>

                        <img src={HeroImage3} alt="" className="rounded-2xl md:w-full  my-20 md:max-w-5xl "  />

                    </div>

            </div>        
            </div>
                

            {/* Footer */}
            <Footer/>

        </div>
    )
}