import {Plus } from "../icons";

import { motion } from "framer-motion";


import { useDispatch } from "react-redux";

import { setId } from "../features/foodorder/foodOrderSlice";



const Menu = ({title, price, image, increaseCount,id,amount}) => {

    /* write your thoughts here how to solve this problem you are facing
    
        Remember that id is already a prop coming in. The id is unique to every food item in the list

        1. First create a state to hold the id of the selected food item the default state is an empty array use the useState hook.
        2. create a function that will run once the add button is pressed. This function will update the array holding the id of the selected items and send that updated array to localStorage.
        NB: Now create a new array that contains everything from initial array. Check if the array has the id passed as props 
        3.Now take the array cartItemsId and use the array find method on it to check if and the id passed as props already exists.
        4.If the id or you can say value does not exit in the array push the id that is passed as props to the array.
     */

    
    const dispatch = useDispatch();

    const updateItemIdToStore = () => {

        //send an object to the store consisting of details of the selected food 
        dispatch(setId({
            'id' : id,
            'image' : image,
            'price' : price,
            'title' : title,
            'amount' : amount
        }))
      
    }


    return ( 


        
        <div>
            {/* Keep the styles here and you need only one card or components that will receive the destructured props to display  */}


            <div>
            
                <div className='flex flex-col items-center justify-center cursor-pointer'>
                
                    <img src={image} alt={title} className='h-44 w-36  object-cover ' />
                    <span className='font-montserrat text-secondary text-sm'>{title}</span>
                    

                    

                    <div className='space-x-4 text-center mt-4 flex items-center justify-center '>
                        <span className='font-montserrat text-lg'>NGN {price}</span > 
 
                        <motion.div whileTap={{scale:0.6}} onClick={()=>{
                            increaseCount()
                            updateItemIdToStore()
                            
                        }} className='hover:scale-125'>
                            <Plus/> 
                            
                        </motion.div>  
                     
                    </div>
                    
                </div>

              
            </div>
        </div>
        
     );
}
 
export default Menu;