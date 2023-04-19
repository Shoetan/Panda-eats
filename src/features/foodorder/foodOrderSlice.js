import { createSlice } from '@reduxjs/toolkit'

// declare the initial state of the id which will be an empty array
const initialState = {
    value : []
}


export const foodOrderSlice = createSlice({
    name : 'id',
    initialState,

    reducers:{
        setId : (state,action) =>{
            state.value.push(action.payload)
        }
    }
})


export const {setId} = foodOrderSlice.actions
export default foodOrderSlice.reducer