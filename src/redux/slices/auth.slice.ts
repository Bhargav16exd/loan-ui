import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
import {backendAPI} from "../../constants"


//Save the user data in local storage
const initialState = {
    loggedInStatus  : JSON.parse(localStorage.getItem("loggedInStatus") || "false") ,
    token           : localStorage.getItem("token") || '',
    data            : JSON.parse(localStorage.getItem("data")  || "{}"),
}

//Function calls Signup API
export const handleSignupAPI:any= createAsyncThunk(
    'auth/signup',
    async function(data){
        try {

            const response =  axios.post(`${backendAPI}/user/signup`,data)
            return (await response).data

        } catch (error:any) {
            alert(error.response.data.message)
        }
    }
)

//Function calls Signin API
export const handleSigninAPI:any = createAsyncThunk(
    'auth/login',
    async function(data){
        try {

            const response =  axios.post(`${backendAPI}/user/login`,data)

            return (await response).data
            
        } catch (error) {
            console.log(error)

        }
    }
)

//Function calls Logout API
export const handleLogoutAPI = createAsyncThunk(
    'auth/logout',
    async function(){
        try {
            const response = axios.get(`${backendAPI}/user/logout`,{
                headers: {
                     "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            })

            return (await response).data
            
        } catch (error) {
            console.log(error)

        }
    }
)

//Function calls Get Data API
export const handleGetDataAPI:any = createAsyncThunk(
    'auth/getData',
    async function(data){
        try {
            const response = axios.post(`${backendAPI}/user/repayment-schedule`,data,{
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            })
          return (await response).data
        }
        catch (error) {
            console.log(error)
        }
    }
)


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(handleSigninAPI.fulfilled , (state,action)=>{

            console.log(action.payload)

            localStorage.setItem("data",JSON.stringify(action.payload))
            localStorage.setItem("token",action.payload?.data)
            localStorage.setItem("loggedInStatus",JSON.stringify(true))

            state.data           = action.payload
            state.loggedInStatus = true
            state.token          = action.payload?.data

            console.log(state.data)
            console.log(state.loggedInStatus)
            console.log(state.token)

        })
        .addCase(handleLogoutAPI.fulfilled , (state)=>{

            localStorage.removeItem("data")
            localStorage.removeItem("token")
            localStorage.removeItem("loggedInStatus")

            state.data           = {}
            state.loggedInStatus = false
            state.token          = ''

        })
    }
    
})

export default authSlice.reducer