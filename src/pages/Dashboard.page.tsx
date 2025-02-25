import { useDispatch } from "react-redux";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { useState } from "react";
import { handleGetDataAPI } from "../redux/slices/auth.slice";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import LoanGraph from "../components/Loangraph";


export function Dashboard() {

    const dispatch = useDispatch()
    const [schedule,setSchedule] = useState<any>(null)


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


        const res = await dispatch(handleGetDataAPI(data))
        setSchedule(res?.payload?.data)

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

              <button onClick={postData} className="py-4 px-6 bg-black text-white rounded-lg  transition mb-10">
                Calculate EMI
              </button>

              {
              schedule ?

              <>

               {/* Graph */}
               <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border">
                <h2 className="text-lg font-semibold mb-4">Loan Repayment Trend</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={schedule}>
                    <XAxis dataKey="dueDate" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="principalComponent" stroke="#4CAF50" name="Principal" />
                    <Line type="monotone" dataKey="interestComponent" stroke="#F44336" name="Interest" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

             {/* Calendar View */}
             <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border">
                <h2 className="text-lg font-semibold mb-4">EMI Calendar</h2>
                <div className="grid grid-cols-3 gap-4">
                  {schedule.map((item:any) => (
                    <div key={item.installment} className="border p-4 rounded-lg text-center">
                      <p className="font-semibold">{item.dueDate}</p>
                      <p>EMI: ₹{item.emi}</p>
                      <p className="text-green-600">Principal: ₹{item.principalComponent}</p>
                      <p className="text-red-600">Interest: ₹{item.interestComponent}</p>
                    </div>
                  ))}
                </div>
              </div>

              <LoanGraph schedule={schedule} />

             
              
              </>
              :
              <></>
            }


            </div>

           


          
         
                      

            <Footer/>
            
        </div>
    )
}