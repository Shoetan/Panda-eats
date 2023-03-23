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

    }

})

export const { isOpen } = checkoutSlice.actions

export default checkoutSlice.reducer