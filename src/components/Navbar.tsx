import { Link } from "react-router-dom"
import FiLogo from "../assets/logo.jpg"
import { useDispatch, useSelector } from "react-redux"
import { handleLogoutAPI } from "../redux/slices/auth.slice"

export function Navbar() {

    const loginStatus = useSelector((state: any) => state.auth.loggedInStatus)
    const dispatch = useDispatch()


    async function handleLogout(){   
        await dispatch(handleLogoutAPI())
    }

    return(
        <div className="flex justify-between border-b border-b-gray-300 py-4 px-8 ">

            <Link to={'/'} className="flex font-poppins gap-2 justify-start items-center cursor-pointer">
                <img src={FiLogo} alt="FiLogo" className="rounded-full h-8 w-8"  />
                <h1 className="text-xl font-bold">Fi</h1>
            </Link>

            {
                loginStatus ? 
                <div className="flex gap-4 justify-end items-center ">
                    <Link to={'/dashboard'} className="font-poppins  bg-black text-white px-4 py-2 rounded-lg">Dashboard</Link>
                    <Link to={'/'} className="font-poppins  bg-black text-white px-4 py-2 rounded-lg" onClick={handleLogout}>Logout</Link>
                </div>
                :
                <div className="flex gap-4 justify-end items-center">
                    <Link to={'/login'} className="font-poppins  bg-black text-white px-4 py-2 rounded-lg">Login</Link>
                    <Link to={'/signup'} className="font-poppins  bg-black text-white px-4 py-2 rounded-lg">Register</Link>
                </div>
            }

        </div>
    )

}