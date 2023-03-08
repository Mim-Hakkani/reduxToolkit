import { configureStore } from "@reduxjs/toolkit";
import bgChangeSlice from "../../feature/changeBackground/bgChangeSlice";
import counterSlice from "../../feature/counterSlice/counterSlice";


const store = configureStore({
    reducer:{
        counter :counterSlice,
        color:bgChangeSlice
    }
})

export default store;