import { useState } from "react";
 import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import {useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom";
import { handleSigninAPI } from "../redux/slices/auth.slice";


export const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [signinData,setSigninData] = useState({
        username:"",
        password:""
    })
    
    function handleChange(e:any){
        const {name,value} = e.target
        setSigninData({
            ...signinData,
            [name]:value
        })
    }
    
    async function handleSubmit(e:any) {
    
        e.preventDefault()
    
        if(!signinData.username || !signinData.password ){
            alert('Username or password is empty')
            return
        }

        //Calls handleSigninAPI to signin
        const res:any = await dispatch(handleSigninAPI(signinData))

        if(res?.payload?.statusCode == 200){
            navigate('/dashboard')
        }
        else{
            return
        }

    }

    return (
        <div className="h-screen w-screen  flex flex-col">

            <Navbar/>

            <div className="w-screen flex justify-center items-center my-32">
            <form className="h-auto w-[80%] sm:w-[35%] flex justify-center items-center flex-col bg-[#ffffff] border rounded-lg py-4 px-6">

                <div className="w-full flex justify-center items-start flex-col my-2">

                    <h1 className=" font-semibold text-3xl my-2">Sign in for Log</h1>
                    <p className="text-gray-500 text-sm my-2">Enter your username and password to access your account</p>

                </div>

                <div className="w-full flex justify-center items-start flex-col my-2">
                    <label className="my-1 font-medium">
                        Username
                    </label>
                    <input type="text" autoComplete="new-username" placeholder="Enter your username" className="my-1 outline-none border rounded-md w-full py-2 px-2" name="username" value={signinData.username} onChange={handleChange}  />
                </div>

                <div className="w-full flex justify-center items-start flex-col my-2">
                    <label className="my-1 font-medium">
                        Password
                    </label>
                    <input type="password" autoComplete="new-password" placeholder="Enter password" className="my-1 outline-none border rounded-md w-full py-2 px-2" name="password" value={signinData.password} onChange={handleChange} />
                </div>

                <div className="my-1 bg-black text-white text-center border rounded-md w-full py-2 px-2" onClick={handleSubmit} >
                    Login
                </div>

                <div className="text-base my-3 text-gray-600 flex ">
                    Already have an account ?  <div className="text-blue-500 mx-2"> <Link to={'/signup'}>Sign up</Link></div>
                </div>
                </form>
            </div>
            

            <Footer/>

        </div>
    );
}