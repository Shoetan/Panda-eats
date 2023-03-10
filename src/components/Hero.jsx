import food1 from '../assets/food1.png'

const Hero = () => {
    return ( 

        //first div should have a width and height of 100vw
        <div>

           {/* This div will define the dimension of the hero section and every element in this hero section will fall into this div */}
            <div className="container mx-auto flex flex-col rounded-3xl border bg-gradient-to-r from-secondary to-dark md:p-2">

                <div className=' mt-12 flex flex-col items-center justify-center md:flex-row md:justify-around'>

                    {/* Hero section text  */}
                    <div className='flex flex-col p-4 -mt-14 -mb-12'>
                        <h1 className='text-background font-poppins leading-tight text-xl mb-6  md:text-4xl w-5/6 '>CHOOSE THE BEST FRESHLY COOKED FOOD</h1>
                        <p className='text-background font-poppins text-sm mb-8 md:w-3/6 md:text-xl'>Just confirm your order and enjoy our tasty meal.</p>
                    </div>
                
                    {/* Hero Image div */}
                    <div className='flex items-center justify-center md:-mb-16'>
                        <img src={food1} alt="" className=' w-3/6 lg:w-5/6 md:w-6/6 mb-10  object-cover object-center'/>
                    </div>

             </div>


                {/* Hero section call to action */}
                <div className='flex space-x-8 font-poppins p-8 md:flex-row '>
                    <button className='rounded full w-48 bg-primary p-2 text-white hover:opacity-80'>How To Order</button>
                    <button className='rounded full w-48 bg-white text-primary border border-primary p-2  hover:opacity-80'>See menu</button>
                </div>

            </div>
        </div>
     );
}
 
export default Hero;