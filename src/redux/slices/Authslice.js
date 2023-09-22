import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../helpers/axiosInstance"

const initialState = {
    role : localStorage.getItem('role') || "",
    data : localStorage.getItem('data') || {},
    token : localStorage.getItem('token') || "",
    isLoggedin : localStorage.getItem('isLoggedin') || false
}

export const login = createAsyncThunk(
    '/auth/login',
    async(data) => {
        try {
            const response = await axiosInstance.post('auth/signin' , data);
            console.log(response,"response")
            return response;
        } catch (error) {
            console.log(error)
        }
    }
)

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {},
    extraReducers : (builder) =>{
        builder.addCase(login.fulfilled , (state , action)=>{
            state.isLoggedin = (action.payload.data.userData != undefined);
            state.data = action.payload?.data?.userData ;
            state.token = action.payload?.data?.token ;
            state.role = action.payload?.data?.userData?.userType ;

            localStorage.setItem("role" , action.payload?.data?.userData?.userType);
            localStorage.setItem("token" , action.payload?.data?.token);
            localStorage.setItem("data" , JSON.stringify(action.payload?.data?.userData));
            localStorage.setItem("isLoggedin" , true);
        })
    }
})


export default authSlice.reducer