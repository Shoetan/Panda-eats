import { createSlice } from "@reduxjs/toolkit";


//In redux the inital state of things is an object

const initialState ={
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    
    reducers :{
        increaseCount: (state) =>{
            
            state.value +=1
        },

        decreaseCount: (state) =>{
            
            /**
             * ! Add an if statement here to check if the count is greater than zero then go ahead to minus one or stop minus if count is zero
             * 
             * 
             */

            if (state.value > 0 ) {
                
                state.value -=1

            }
        }
    }
})

//export the actions created

export const {increaseCount, decreaseCount} = counterSlice.actions

export default counterSlice.reducer