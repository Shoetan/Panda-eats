import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
import cartReducer from '../features/counter/cartSlice'
import checkoutReducer from '../features/checkout/checkoutSlice'

export const store = configureStore({
    reducer : {
        counter:counterReducer,
        cart : cartReducer,
        checkout : checkoutReducer
    },
})