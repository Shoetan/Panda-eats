import logo from '../assets/Logo.png';
import  { useSelector} from 'react-redux'
import { CartIcon, Avatar } from '../icons';

import { useDispatch } from 'react-redux';
import { isOpen } from '../features/checkout/checkoutSlice';


const Header = () => {



        // get the current value of the state from the store
    const count = useSelector((state) =>state.counter.value)

     // calling in the handy man to do the job of carrying out some functions
    const dispatch = useDispatch()


    return (
        
    <div className='sticky top-0 z-30 bg-background flex mx-auto justify-between items-center -mt-6 mb-6'>

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

                 <div className='cursor-pointer' onClick={()=>{dispatch(isOpen())}}>
                     <CartIcon/>
                 </div>
            
            <div className='relative -top-3.5 right-3   rounded-full bg-red-700  w-5 h-5 flex items-center justify-center'>
                <p className='text-white text-xs'> { count }</p> 
            </div> 

            <div className='cursor-pointer'>
                <Avatar/>
            </div>

        </div>

    </div>  
        
     );
}
 
export default Header;