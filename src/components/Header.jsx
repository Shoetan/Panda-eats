import logo from '../assets/Logo.png';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Avatar } from '@mui/material';
import  { useSelector} from 'react-redux'


const Header = () => {

    const count = useSelector((state) =>state.counter.value)


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
            <ShoppingBasketIcon className='text-slate-900 cursor-pointer'/>

            <div className='relative -top-3.5 right-3   rounded-full bg-red-700  w-5 h-5 flex items-center justify-center'>
                <p className='text-white text-xs'> { count }</p> 
            </div> 

        </div>

    </div>  
        
     );
}
 
export default Header;