import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../assets/cartItems";

const initialState ={

    //the items in this case the food will be stored in an array of items
    items: cartItems,
    amount : 0,
    total : 0,
    isLoading:true,
}

export const cartSlice = createSlice({
    name : 'cart',
    initialState,

    reducers:{
       
    }

})

export default cartSlice.reducer