import logo from '../assets/Logo.png';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Avatar } from '@mui/material';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        
    <div className='container flex mx-auto justify-between items-center -mt-6'>

        {/* restaurant Logo */}
        <div>
            <img src={logo} alt="Panda Eats logo" className='object-cover h-32' />
        </div>

        {/* nav links */}

        <div>
            <ul className=' font-poppins text-sm hidden sm:flex space-x-6 text-dark'>
                <li className='hover:text-slate-500 cursor-pointer'>HOME</li>

                <li className='hover:text-slate-500 cursor-pointer'>HOW TO ORDER</li>

                <li className='hover:text-slate-500 cursor-pointer'>MENU</li>
                
                <li className='hover:text-slate-500 cursor-pointer'>ABOUT US</li>
            </ul>
        </div>

        {/* shopping cart,avatar or hamburger menu based on the view */}
        <div className='flex items-center justify-center mr-4'>
            <ShoppingBasketIcon className='text-slate-900 cursor-pointer'/>

            <div className='relative -top-3.5 right-3   rounded-full bg-red-700  w-5 h-5 flex items-center justify-center'>
                <p className='text-white text-xs'>0</p>
            </div> 

            <Avatar
             sx={{ width: 24, height: 24 }} className='p-4'
            >
            E
            </Avatar>
            
        </div>

    </div>  
        
     );
}
 
export default Header;