import { useDispatch } from "react-redux";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { useState } from "react";
import { handleGetDataAPI } from "../redux/slices/auth.slice";

export function Dashboard() {

    const dispatch = useDispatch()

    const [data,setData] = useState({
        disbursementDate: "",
        principal: 0,
        tenure: 0,
        emiFrequency: "",
        interestRate: 0,
        moratorium: 0
    })

    function handleChange(e:any){

        e.preventDefault()

        const {name,value} = e.target

        setData({
            ...data,
            [name]: value
        })
    }


    async function postData(){

        console.log(data)   

        const res = await dispatch(handleGetDataAPI(data))
        console.log(res)
    }



    return(
        <div>

            <Navbar/>

            <div className="px-10 py-4 min-h-[90vh]">


              <h1 className="text-5xl font-bold my-6">DASHBOARD</h1>

              {/* Top Section */}
              <div className="flex flex-col gap-4 md:flex-row  ">

                <div className="w-full md:w-1/3 rounded-2xl md:my-4 py-4 px-4 bg-[#f6f6f6]">
                  <span className="font-bold">Disbursement Date</span>
                  <input
                    type="date"
                    name="disbursementDate"
                    onChange={handleChange}
                    className="mt-1 w-full  outline-none"
                  />
                </div>

                <div className="w-full md:w-1/3 rounded-2xl md:my-4 py-4 px-4 bg-[#5FE75C] text-white">
                 <span className="font-bold">Principal Amount</span>
                  <input
                    type="number"
                    name="principal"
                    onChange={handleChange}
                    placeholder="Enter amount"
                    className="mt-1 w-full p-2 border-b  outline-none"
                  />
                        
                </div>


                <div className="w-full md:w-1/3 border rounded-2xl md:my-4 py-4 px-4 bg-black text-gray-200">
                  <span className="">Tenure (Months)</span>
                  <input
                    type="number"
                    name="tenure"
                    onChange={handleChange}
                    placeholder="Enter tenure"
                    className="mt-1 w-full p-2 border-b outline-none border-b-gray-200"
                  />
                </div>

              </div>

              {/* Bottom Section */}
              <div className="flex flex-col gap-4 my-4 md:flex-row  ">

                <div className="w-full md:w-1/3 rounded-2xl md:my-4 py-4 px-4 bg-[#f6f6f6]">
                  <span className="font-bold">EMI Frequency</span>
                  <select
                    name="emiFrequency"
                    onChange={handleChange}
                    className="mt-1 w-full p-2 "
                  >
                    <option value="monthly">Monthly</option>

                  </select>
                </div>

                <div className="w-full md:w-1/3 rounded-2xl md:my-4 py-4 px-4 bg-[#5FE75C] text-white">

                  <span className="font-bold">Interest Rate (%)</span>
                  <input
                    type="number"
                    name="interestRate"
                    onChange={handleChange}
                    placeholder="Enter interest rate"
                    className="mt-1 w-full p-2 border-b outline-none"
                  />
                        
                </div>


                <div className="w-full md:w-1/3 border rounded-2xl md:my-4 py-4 px-4 bg-black text-gray-200">
                  <span className="font-bold">Moratorium Period</span>
                  <input
                    type="number"
                    name="moratorium"
                    onChange={handleChange}
                    placeholder="Enter moratorium (months)"
                    className="mt-1 w-full p-2 border-b"
                  />
                </div>

              </div>

              <button onClick={postData} className="py-4 px-6 bg-black text-white rounded-lg  transition">
                Calculate EMI
              </button>

            </div>


              

            <Footer/>
            
        </div>
    )
}