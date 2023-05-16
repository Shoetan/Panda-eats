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


        increaseSelectedFoodAmount: (state, action) => {

            //destructure id and amount from the payload

            const { id, amount } = action.payload


            //find the specific index of the selected item from the array of foods selected where the food is equal to the id coming from the payload

            const index = state.value.findIndex(food => food.id === id)

            // if statement to check if the index is found. findIndex returns -1 if the index is not found so  if index is not equal to -1 run the statement

            if (index !== -1) {
                state.value[index].amount += amount
            }

            return state


        },

        decreaseSelectedFoodAmount: (state, action) => {

            //destructure id and amount from the payload

            const { id, amount } = action.payload

            //find the specific index of the selected item from the array of foods selected where the food id is equal to the id coming from the payload

            const index = state.value.findIndex(food => food.id === id)

            // if statement to check if the index is found. findIndex returns -1 if the index is not found so  if index is not equal to -1 run the statement

            if (index !== -1) {

                if (state.value[index].amount > 1) {

                    state.value[index].amount -= amount
                }
            }
        },


        removeSelectedFood: (state, action) => {

            //destructure the id from the payload

            const { id } = action.payload

            //find the specific index of the selected item from the array of foods selected where the food id is equal to the id coming from the payload

            const index = state.value.findIndex(food => food.id === id)

            // if statement to check if the index is found. findIndex returns -1 if the index is not found so  if index is not equal to -1 run the statement

            if (index !== -1) {

                //splice is a javascript array method that removes items from an array at a given index. it takes two arguements the index where the removal should happen and the number of items to be removed

                state.value.splice(index, 1)

            }

        },


        calculateTotalOfSelectedFood: (state, action) => {

            //destructure the id from the payload which is passed as an object

            const { id } = action.payload

            //find the specific index of the selected item from the array of foods selected where the food id is equal ti the id coming from the payload

            const index = state.value.findIndex(food => food.id === id)

            //if statement to check if the index is found. findIndex returns -1 if the index is not found so if index is not equal to -1 run the statement

            if (index !== -1) {

                // recalculate the total property by multiplying the price property and the amount property.

                state.value[index].total = state.value[index].price * state.value[index].amount



            }

        }


    }
})


export const { addSelectedFoodId, clearSelectedFoodId, increaseSelectedFoodAmount, decreaseSelectedFoodAmount, removeSelectedFood, calculateTotalOfSelectedFood, decreaseTotalOfSelectedFood } = foodOrderSlice.actions

export default foodOrderSlice.reducer