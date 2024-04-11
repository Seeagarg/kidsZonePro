import { createSlice } from "@reduxjs/toolkit";

const initialState = {lang:1}


const langSlice = createSlice({
    name:'langSlice',
    initialState:initialState,
    reducers:{
        changeLanguage:(state,action)=>{
            state.lang = action.payload;
            return state;
        },
    }
})


export const {changeLanguage} = langSlice.actions;
export default langSlice.reducer;