import { createSlice } from "@reduxjs/toolkit";

const initialState ={

    //the items in this case the food will be stored in an array of items
    items: [],
}

export const cartSlice = createSlice({
    name : 'cart',
    initialState,

    reducers:{
        addToCart : (state,action) =>{

            //this payload will come from the frontend
            const item = action.payload

            //this line of code will match the Id of the item(s) in the cart and the id of the current selected item and it matches the item is not added but quantity increased
            const exitingItem = state.items.find(cartItem => cartItem.id === item.id)

            if (exitingItem) {
                exitingItem.quantity++
            } else {
                
                //otherwise add the item and the quantity to the cart
                state.items.push({...item, quantity:1})
            }
        }
    }

})