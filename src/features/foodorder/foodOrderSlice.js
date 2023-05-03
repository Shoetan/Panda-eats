import { createSlice } from '@reduxjs/toolkit'

// declare the initial state of the id which will be an empty array
const initialState = {
    value : []
}


export const foodOrderSlice = createSlice({
    name : 'foodOrder',
    initialState,

    reducers:{
        setId : (state,action) =>{
            // take the payload and push it to an array 
            state.value.push(action.payload)
        },


        // clear the array of selected food Id from the store 
        clearId : (state) =>{ 

            state.value = []

        },

        //increase the amount based on the Id of the item

        increaseAmount: (state, action )=>{
            
            const idToIncrease = action.payload

            const updatedItems = state.value.map(item => {

                if (item.id === idToIncrease) {

                    return {
                        ...item,
                        amount : item.amount + 1
                    }
                }

                else{
                    return item
                    
                }

                
        
            })

            state.value = updatedItems
            
            
        
            

        }
    }
})


export const {setId, clearId, increaseAmount} = foodOrderSlice.actions
export default foodOrderSlice.reducer