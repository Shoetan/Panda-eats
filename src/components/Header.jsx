import logo from '../assets/Logo.png';
import { useSelector} from 'react-redux'
import { CartIcon } from '../icons';
import { Avatar } from '@mui/material';
import { useDispatch } from 'react-redux';
import { isOpen } from '../features/checkout/checkoutSlice';
import { motion } from 'framer-motion';
import Dropdown from './Dropmenu';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/firbase';



const Header = () => {



        // get the current value of the state from the store
    const count = useSelector((state) =>state.counter.value)

     // calling in the handy man to do the job of carrying out some functions
    const dispatch = useDispatch()


    //state to manage the dropdown menu 
    const [isShow, setIsShow] = useState('')

    //function to toggle the simple dropdown menu 
    const showDropdown = () =>{
        setIsShow(!isShow)
        
    }
    
    // get the credentials of the current logged in user from firebase using the firebase react hooks

    const [user] = useAuthState(auth)
    

    return (
        
    <header className='sticky top-0 z-30 bg-background flex mx-auto justify-between items-center -mt-6 mb-6'>

        {/* restaurant Logo */}
        <div>
            <img src={logo} alt="Panda Eats logo" className='object-cover h-32' />
           
        </div>

        {/* nav links */}

        <div>
            <ul className=' font-poppins text-sm hidden sm:flex space-x-6 text-dark'>
                
                <li className='hover:text-slate-500 cursor-pointer'>HOW TO ORDER</li>

                <li className='hover:text-slate-500 cursor-pointer'>MENU</li>
                
                <li className='hover:text-slate-500 cursor-pointer'>ABOUT US</li>
                
            </ul>
        </div>

        {/* shopping cart,avatar or hamburger menu based on the view */}
        <div className='flex items-center justify-center mr-4'>

                 <motion.div whileTap={{scale:0.6}} className='cursor-pointer' onClick={()=>{
                    dispatch(isOpen())
                    
                    
                    
                }}>
                     <CartIcon/>
                 </motion.div>
            
            <div className='relative -top-3.5 right-3   rounded-full bg-red-700  w-5 h-5 flex items-center justify-center'>
                <p className='text-white text-xs'> { count }</p> 
            </div> 

            <div className='flex flex-col items-center justify-center'>
                <motion.div whileTap={{scale:0.6 }} className='cursor-pointer'
                onClick={() =>{
                    showDropdown()
                    
                }}>

                {/* using the tenary operator here if a user is logged and has a photoURL use the avatar component with the photoURL eles use only the avatar component with the initials of the logged in user */}

                {/* optional chaining is also employed here ==>(?.). This makes it safe to access properties of an object even if one or more values in the chain is null or undefined  */}

                { user?.photoURL ?
                    
                    <Avatar 
                        sx={{width:30, height:30}}
                        src = {user.photoURL}
                    ></Avatar> :
                    <Avatar
                    sx = {{width: 30, height:30}}>
                    
                
                    </Avatar>
                }

                </motion.div>

                {/* using the tenary operation to display a simple dropdowm menu depending on the state  */}

                {
                    isShow ? (<Dropdown/>) :
                    null 
                }

            </div>


        </div>

    </header>  
        
     );
}
 
export default Header;