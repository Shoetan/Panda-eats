import { createSlice } from '@reduxjs/toolkit'

// declare the initial state of the id which will be an empty array
const initialState = {
    value : new Array()
}


export const foodOrderSlice = createSlice({
    name : 'foodId',
    initialState,

    reducers:{
        setId : (state,action) =>{
            // take the payload and push it to an array 
            state.value.push(action.payload)
        }
    }
})


export const {setId} = foodOrderSlice.actions
export default foodOrderSlice.reducer