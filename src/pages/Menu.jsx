import food2 from '../assets/food2.png'
import food3 from '../assets/food3.png'
import food4 from '../assets/food4.png'
import food5 from '../assets/food5.png'
import food6 from '../assets/food6.png'
import food7 from '../assets/food7.png'



const Menu = () => {
    return ( 

        <div>
            
            <div className="flex flex-col items-center justify-center font-poppins mt-10 text-dark">
                <h2 className="text-3xl p-4 ">Menu</h2>
                <h4 className="text-sm opacity-90">Pick from below</h4>
            </div>


            <div className=' container flex flex-col mx-auto justify-between mt-8 p-8 border md:grid grid-cols-3 gap-8'>
                <div className='flex flex-col items-center justify-center'>
                    <img src={food2} alt="Salmon dish" className='h-44 w-36 object-cover' />
                    <h3></h3>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <img src={food3} alt=""  className='h-44 w-36 object-cover'/>
                    <h3></h3>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <img src={food4} alt="" className='h-44 w-36 object-cover'/>
                    <p></p>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <img src={food5} alt="" className='h-44 w-36 object-cover' />
                    <p></p>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <img src={food6} alt="" className='h-44 w-36 object-cover'/>
                    <p></p>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <img src={food7} alt=""  className='h-44 w-36 object-cover'/>
                    <p></p>
                </div>
            </div>
        </div>
        
     );
}
 
export default Menu;