
import order from '../assets/order.png'
import delivery from '../assets/delivery.png'
import signup from '../assets/signup.png'


const HowItWorks = () => {
    return ( 
        <div id='how-to-order-section'>
            <div>
                <div className="flex flex-col items-center justify-center mt-10 ">
                 <h2 className="text-3xl p-4 font-poppins font-semibold text-secondary ">How To Order?</h2>
                 <h4 className="text-sm opacity-90 font-montserrat">Follow the steps</h4>
                </div>

                {/* Create three divs to each step on how to order */}
                <div className='container mx-auto flex mt-8 p-8 justify-around'>
                
                <div className='flex flex-col items-center justify-center hover:scale-125'>
                    <img src={signup} alt="An order confirmation" className='h-12 w-12 md:h-28 md:w-28' />
                    <h3 className='font-poppins p-4 text-xs font-semibold md:text-sm'>Sign Up</h3>
                </div>
                
                <div className='flex flex-col items-center justify-center hover:scale-125'>
                    <img src={order} alt="An order confirmation" className='h-12 w-12 md:h-28 md:w-28' />
                    <h3 className='font-poppins p-4 text-xs font-semibold md:text-sm'>Place your order</h3>
                </div>

                    <div className='flex flex-col items-center justify-center hover:scale-125'>
                        <img src={delivery} alt="A Food delivery van" className='h-12 w-12 md:h-28 md:w-28' />
                        <h3 className='font-poppins p-4 text-xs font-semibold md:text-sm'>Food is on it's way</h3>
                    </div>
                </div>



            </div>
        </div>
     );
}
 
export default HowItWorks ;