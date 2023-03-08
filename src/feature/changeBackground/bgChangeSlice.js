import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    color:''
}

const bgChangeSlice =createSlice({
    initialState,
    name:"bgChange",
    reducers:{
        setRed :(state)=>{
           state.color="red" 
        },

        setGreen :(state)=>{
            state.color = "green"
        },

        setBlue :(state)=>{
          state.color = "blue"
        }
    }

})

export const {setBlue,setGreen,setRed} = bgChangeSlice.actions

export default bgChangeSlice.reducer;