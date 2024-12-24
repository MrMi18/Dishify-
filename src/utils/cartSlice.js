import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        item:[],
    },
    reducers:{
        addItems:(state,action) =>{
            state.item.push(action.payload);
        },
        removeItems:(state,action) =>{
            state.item.pop()
        },
        clearItems:(state) =>{
            state.item = [];
        }
    }
})

export const {addItems,removeItems,clearItems} = cartSlice.actions;
export default cartSlice.reducer;