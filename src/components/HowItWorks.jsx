import location from '../assets/location.png'
import order from '../assets/order.png'
import delivery from '../assets/delivery.png'


const HowItWorks = () => {
    return ( 
        <div>
            <div>
                <div className="flex flex-col items-center justify-center font-poppins mt-10 text-dark">
                 <h2 className="text-3xl p-4 ">How To Order?</h2>
                 <h4 className="text-sm opacity-90">Follow the steps</h4>
                </div>

                {/* Create three divs to each step on how to order */}
                <div className='container mx-auto flex mt-8 p-8 justify-around'>
                    <div className='flex items-center justify-center flex-col'>
                        <img src={location} alt="Pick your location" className='h-12 w-12 md:h-28 md:w-28'/>
                        <h3 className='font-poppins p-4 text-xs font-semibold md:text-sm'>Pick your location</h3>
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                        <img src={order} alt="An order confirmation" className='h-12 w-12 md:h-28 md:w-28' />
                        <h3 className='font-poppins p-4 text-xs font-semibold md:text-sm'>place your order</h3>
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                        <img src={delivery} alt="A Food delivery van" className='h-12 w-12 md:h-28 md:w-28' />
                        <h3 className='font-poppins p-4 text-xs font-semibold md:text-sm'>Food is on it's way</h3>
                    </div>
                </div>



            </div>
        </div>
     );
}
 
export default HowItWorks ;