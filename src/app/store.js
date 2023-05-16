import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
import checkoutReducer from '../features/checkout/checkoutSlice'
import foodOrderReducer from '../features/foodorder/foodOrderSlice'

//Below imports are for the persistence of the redux store
import storage  from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk"


//All reducers combined together in one place
const reducers = combineReducers({
        counter:counterReducer,
        checkout : checkoutReducer,
        foodSelected : foodOrderReducer
    
})


const persistConfig = {
    key: 'root',
    storage,
}


const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV  !== 'production',
    middleware: [thunk]
})