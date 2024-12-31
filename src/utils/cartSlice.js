import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        item:{},
    },
    reducers:{
        addItems: (state, action) => {
            const { id, data } = action.payload;
            if (state.item[id]) {
                // If item already exists, increment its quantity
                state.item[id].quantity += 1;
            } else {
                // If item doesn't exist, add it with an initial quantity of 1
                state.item[id] = { ...data, quantity: 1 };
            }
        },
        addingOneItem:(state,action) =>{
            const {id} = action.payload;
            if (state.item[id]) {
                // If item already exists, increment its quantity
                state.item[id].quantity += 1;
            }
        },
        removeItem:(state,action) =>{
           const{id} = action.payload;
           if(state.item[id].quantity<=1){
            delete state.item[id];
           }else{
            state.item[id].quantity -= 1;
           }
        },
        clearItems:(state) =>{
            state.item = {};
        }
    }
})

export const {addItems,removeItem,clearItems,addingOneItem} = cartSlice.actions;
export default cartSlice.reducer;