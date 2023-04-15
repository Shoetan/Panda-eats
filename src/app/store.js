import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
import checkoutReducer from '../features/checkout/checkoutSlice'
import foodorderReducer from '../features/foodorder/foodOrderSlice'
import { persistStore, persistReducer } from "redux-persist";


export const store = configureStore({
    reducer : {
        counter:counterReducer,
        checkout : checkoutReducer,
        food : foodorderReducer
    },
})