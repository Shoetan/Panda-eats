import food2 from '../assets/food2.png'
import food3 from '../assets/food3.png'
import food4 from '../assets/food4.png'
import food5 from '../assets/food5.png'
import food6 from '../assets/food6.png'
import food7 from '../assets/food7.png'

import { useDispatch } from 'react-redux'
import { increaseCount } from '../features/counter/counterSlice'



const Menu = () => {
     
    const dispatch = useDispatch()

    return ( 

        <div>
            
            <div className='container flex flex-col mx-auto justify-between mt-8 p-8 md:grid grid-cols-3 gap-8'>
                <div className='flex flex-col items-center justify-center cursor-pointer'>
                    <img src={food2} alt="Salmon dish" className='h-44 w-36  object-cover ' />
                    <span className='font-poppins text-sm'>Salmon Fillet</span>
                    <div className='    space-x-4 text-center mt-4 flex items-center justify-center'>
                        <span className='font-poppins'>NGN 3500</span >
                        <button className='rounded-md p-4 border h-10 flex items-center bg-black text-background hover:scale-105' onClick={()=>{dispatch(increaseCount())}}>+</button>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center cursor-pointer'>
                    <img src={food3} alt=""  className='h-44 w-36 object-cover '/>
                    <span className='font-poppins text-xs'>Veggie Bowl</span>
                    <div className='space-x-4 text-center mt-4 flex items-center justify-center'>
                        <span className='font-poppins'>NGN 1200</span>
                        <button className='rounded-md p-4 border h-10 flex items-center shadow-lg bg-accent hover:scale-105'  onClick={()=>{dispatch(increaseCount())}}  > +
                        </button>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center cursor-pointer'>
                    <img src={food4} alt="" className='h-44 w-36 object-cover'/>
                    <span className='font-poppins text-xs'>Chicken Wings</span>
                    <div className='space-x-4 text-center mt-4 flex items-center justify-center'>
                        <span className='font-poppins' >NGN 2200</span >
                        <button className='rounded-md p-4 border h-10 flex items-center shadow-lg bg-black text-background hover:scale-105'  onClick={()=>{dispatch(increaseCount())}}  >+</button>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center cursor-pointer'>
                    <img src={food5} alt="" className='h-44 w-36 object-cover' />
                    <span className='font-poppins text-xs'>Grilled Potatoes</span>
                    <div className='space-x-4 text-center mt-4 flex items-center justify-center'>
                        <span className='font-poppins' >NGN 1500</span >
                        <button className='rounded-md p-4 border h-10 flex items-center shadow-lg bg-accent hover:scale-105'   onClick={()=>{dispatch(increaseCount())}}  >+</button>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center cursor-pointer'>
                    <img src={food6} alt="" className='h-44 w-36 object-cover'/>
                    <span className='font-poppins text-xs'>Butter Salmon Curry</span>
                    <div className='space-x-4 text-center mt-4 flex items-center justify-center'>
                        <span className='font-poppins'>NGN 4300</span >
                        <button className='rounded-md p-4 border h-10 flex items-center shadow-lg bg-black text-background hover:scale-105'  onClick={()=>{dispatch(increaseCount())}}   >+</button>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center cursor-pointer'>
                    <img src={food7} alt=""  className='h-44 w-36 object-cover'/>
                    <span className='font-poppins text-xs'>Pasta Rigotoni </span>
                    <div className='space-x-4 text-center mt-4 flex items-center justify-center'>
                        <span className='font-poppins' >NGN 5300</span >
                        <button className='rounded-md p-4 border h-10 flex items-center  shadow-lg bg-accent hover:scale-105'   onClick={()=>{dispatch(increaseCount())}}  >+</button>
                    </div>
                </div>
            </div>
        </div>
        
     );
}
 
export default Menu;