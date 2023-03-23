import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    value : 'false'
}


export const checkoutSlice = createSlice ({
    name : 'checkOut',
    initialState,

    reducers : {

      isOpen : (state) => {

        //just invert the current value of the state
        
        state.value = !state.value
      }  
        //rewrite the reducers so I can have one reducer to change the state to true and another state to false or just use the same reducer
    }

})

export const { isOpen } = checkoutSlice.actions

export default checkoutSlice.reducer