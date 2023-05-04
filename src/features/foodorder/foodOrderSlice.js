import { createSlice } from '@reduxjs/toolkit'

// declare the initial state of the id which will be an empty array
const initialState = {
    value: []
}


export const foodOrderSlice = createSlice({
    name: 'foodOrder',
    initialState,

    reducers: {
        addSelectedFoodId: (state, action) => {

            //use a default value for the action.payload .if action id dispatch without payload the reducer will not throw and error

            const selectedFoodId = action.payload || {}

            // take the payload and push it to an array 
            state.value = [...state.value, selectedFoodId]
        },


        // clear the array of selected food Id from the store 
        clearSelectedFoodId: (state) => {


            state.value = []

        },

        increaseSelectedFoodAmount: ( state, action) =>{
            
            //destructure id and amount from the payload

            const {id, amount } = action.payload

            
            //find the specific index of the selected item from the array of foods
            
            const index = state.value.findIndex(food => food.id === id)
            
            if (index !== -1) {
                state.value[index].amount += amount
            }
            

        },

        decreaseSelectedFoodAmount: (state, action ) =>{

            //destructure id and amount from the payload

            const {id, amount} = action.payload

            //find the specific index of the selected item from the array of foods

            const index = state.value.findIndex(food => food.id === id)

            if (index !== -1) {
                state.value[index].amount -=amount
            }
        } 


    }
})


export const { addSelectedFoodId, clearSelectedFoodId, increaseSelectedFoodAmount, decreaseSelectedFoodAmount } = foodOrderSlice.actions
export default foodOrderSlice.reducer