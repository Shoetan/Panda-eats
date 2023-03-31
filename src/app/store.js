import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
import checkoutReducer from '../features/checkout/checkoutSlice'
import foodorderReducer from '../features/foodorder/foodOrderSlice'

export const store = configureStore({
    reducer : {
        counter:counterReducer,
        checkout : checkoutReducer,
        food : foodorderReducer
    },
})