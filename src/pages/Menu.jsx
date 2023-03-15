
import { Plus } from '../icons'

const Menu = ({id , title, price, image, amount, action}) => {
     
    

    return ( 


        
        <div>
            {/* Keep the styles here and you need only one card or components that will receive the destructured props to display  */}


            <div>
            
                <div className='flex flex-col items-center justify-center cursor-pointer'>
                    <img src={image} alt={title} className='h-44 w-36  object-cover ' />
                    <span className='font-poppins text-sm'>{title}</span>
                    <div className='    space-x-4 text-center mt-4 flex items-center justify-center'>
                        <span className='font-poppins'>NGN {price}</span >  
                         <button disabled="disabled" onClick={()=>{action()}}>+</button>   
                    </div>
                </div>

              
            </div>
        </div>
        
     );
}
 
export default Menu;