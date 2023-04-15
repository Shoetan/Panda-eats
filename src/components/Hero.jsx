import food1 from '../assets/food1.png'
import { motion } from 'framer-motion';

const Hero = () => {
    return ( 

        //first div should have a width and height of 100vw
        <div>

           {/* This div will define the dimension of the hero section and every element in this hero section will fall into this div */}

           {/* NB: Remove the background color once you are done getting the proportions */}

            <div className="container mx-auto flex flex-col  rounded-t-lg rounded-b-lg mt-6 md:p-2">

                <div className=' mt-11 flex flex-col items-center justify-center md:flex-row md:justify-around'>

                    {/* Hero section text  */}
                    <div className='flex flex-col p-4 -mt-14 -mb-12'>

                        <h1 className=' text-secondary font-poppins text-4xl font-semibold mb-6 mt-6 md:text-6xl md:-mt-10'>Enjoy the artistry <br /> Feel good</h1>

                        <p className='text-secondary font-montserrat mb-8 font-light text-sm md:w-3/6 md:text-xl'>Taste our restaurant's culinary masterpieces that will tantalize your taste buds and enliven your sense.</p>
                    </div>
                
                    {/* Hero Image div */}
                    <div className='flex items-center justify-center md:-mb-16'>
                        <img src={food1} alt="" className=' w-3/6 lg:w-5/6 md:w-6/6 mb-10  object-cover object-center'/>
                    </div>

             </div>


                {/* Hero section call to action */}
                <div className='flex space-x-8 font-poppins p-8 md:flex-row '>

                    <motion.button 
                     whileTap={{scale:0.8}}   
                     className='rounded full w-48 bg-accent p-2 text-white'>
                     How To Order
                     </motion.button>

                    <motion.button whileTap={{scale:0.8}} 
                    className='rounded full w-48 text-secondary border border-bg-secondary p-2 '>
                    See menu
                    </motion.button>
                </div>

            </div>
        </div>
     );
}
 
export default Hero;