import { Navbar } from "../components/Navbar";
import HeroImage from "../assets/hero-image.jpg";
import HeroImage2 from "../assets/hero-image-3.jpg";
import BgGrid from "../assets/bg-grid.avif"
import { Footer } from "../components/Footer";

export function LandingPage(){
    return(
        <div>

            {/* Navbar */}

            <Navbar/>


            <div className="flex flex-col justify-center items-center px-4 border-b">

                    <h1 className="text-5xl font-semibold text-center my-10 tracking-tighter leading-11 md:text-7xl md:leading-20 md:max-w-4xl">
                        Loan Scheduling and Management made Easy
                    </h1>

                    <p className="text-center text-xl text-gray-400 my-4 md:text-2xl md:max-w-4xl">
                    "Tired of complex, time-consuming, frustrating, and inefficient loan schedulers that drain your energy with endless paperwork, confusing calculations, and rigid repayment structures?
                    </p>

                    <button className="bg-black text-white font-bold mt-8 py-2 px-4 rounded-2xl ">
                        Signup ?
                    </button>

                    <img src={HeroImage} alt="" className="rounded-2xl md:w-full my-16"  />

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

                    <p className="text-center mb-10 text-xl text-gray-400 my-4 md:text-2xl md:max-w-4xl">
                    Our platform simplifies loan scheduling with seamless automation, effortless customization, and real-time tracking—so you can focus on what truly matters!"
                    </p>

                    <div className="flex justify-center items-center flex-col  ">

                        <div>
                            <button className="bg-black text-white font-bold py-2 px-4 rounded-2xl ">
                                Get Started
                            </button>
                        </div>

                        <img src={HeroImage2} alt="" className="rounded-2xl md:w-full  my-20 "  />

                    </div>

            </div>        
            </div>
                

            {/* Footer */}
            <Footer/>

        </div>
    )
}