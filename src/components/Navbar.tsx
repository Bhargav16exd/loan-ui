import { Link } from "react-router-dom"
import FiLogo from "../assets/logo.jpg"

export function Navbar() {

    return(
        <div className="border-b border-b-gray-300 py-4 px-8 ">

            <Link to={'/'} className="flex font-poppins gap-2 justify-start items-center cursor-pointer">
                
                <img src={FiLogo} alt="FiLogo" className="rounded-full h-8 w-8"  />

                <h1 className="text-xl font-bold">Fi</h1>
            </Link>

        </div>
    )

}