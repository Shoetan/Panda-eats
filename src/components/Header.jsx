import logo from '../assets/Logo.png';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Avatar } from '@mui/material';

const Header = () => {
    return (
        
    <div className='container flex mx-auto justify-between items-center -mt-6'>

        {/* restaurant Logo */}
        <div>
            <img src={logo} alt="Panda Eats logo" className='object-cover h-32' />
        </div>

        {/* nav links */}

        <div>
            <ul className=' font-poppins text-xs hidden sm:flex text-dark'>
                <li>HOME</li>
                <li>HOW IT WORKS</li>
                <li>ABOUT US</li>
                <li>MENU</li>
            </ul>
        </div>

        {/* shopping cart,avatar or hamburger menu based on the view */}
        <div className='flex items-center justify-center mr-4'>
            <ShoppingBasketIcon className='text-dark cursor-pointer'/>

            <div className='relative -top-3 right-3   rounded-full bg-red-700  w-5 h-5   flex items-center justify-center'>
                <p className='text-white text-xs'>10</p>
            </div> 

            <Avatar
             sx={{ width: 24, height: 24 }} 
            >
            </Avatar>
            
        </div>

    </div>  
        
     );
}
 
export default Header;