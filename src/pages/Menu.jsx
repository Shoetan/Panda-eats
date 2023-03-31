import {Plus } from "../icons";

import { motion } from "framer-motion";

import { useDispatch } from "react-redux";

import { setId } from "../features/foodorder/foodOrderSlice";

const Menu = ({title, price, image, increaseCount,id}) => {
     
    const dispatch = useDispatch()


    const pushIdToArray = () =>{
        dispatch(setId(id))
    }

    return ( 


        
        <div>
            {/* Keep the styles here and you need only one card or components that will receive the destructured props to display  */}


            <div>
            
                <div className='flex flex-col items-center justify-center cursor-pointer'>
                    <img src={image} alt={title} className='h-44 w-36  object-cover ' />
                    <span className='font-poppins text-sm'>{title}</span>

                    <div className='space-x-4 text-center mt-4 flex items-center justify-center '>
                        <span className='font-poppins'>NGN {price}</span > 

                        <motion.div whileTap={{scale:0.6}} onClick={()=>{
                            increaseCount()
                            pushIdToArray()
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