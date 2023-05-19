import food7 from '../assets/food7.png'
import { motion } from 'framer-motion';

const Hero = () => {

 // THid function scrolls to the menu section
    const scrollToMenu = () => {
        const menuSection = document.querySelector('#menu-section')
        menuSection.scrollIntoView({behavior: 'smooth'})
    }   
    
    
    const scrollToHowToOrder = () => {

        const howToOderSection = document.querySelector('#how-to-order-section')
        howToOderSection.scrollIntoView({behavior: 'smooth'})

    }
    return ( 

        //first div should have a width and height of 100vw
        <div>

           {/* This div will define the dimension of the hero section and every element in this hero section will fall into this div */}

           {/* NB: Remove the background color once you are done getting the proportions */}

            <div className="container mx-auto flex flex-col md:p-2 md:justify-between md:mb-32">

                <div className='mt-10 flex flex-col items-center justify-center md:flex-row md:justify-between md:mx-32'>

                    {/* Hero section text  */}
                    <div className='flex flex-col p-4 -mt-14 -mb-12'>

                        <h1 className=' text-secondary font-poppins text-4xl font-extrabold mb-6 mt-6 md:text-7xl md:-mt-10'>Enjoy the artistry <br /> Feel good</h1>

                        <p className='text-secondary font-montserrat mb-8 font-light text-sm md:w-3/6 md:text-xl md:mt-6'>Taste our restaurant's culinary masterpieces that will tantalize your taste buds and enliven your sense.</p>
                    </div>
                
                    {/* Hero Image div */}
                    <div className='flex items-center justify-center md:-mb-16'>
                        <img src={food7} alt="" className=' w-3/6 lg:w-5/6 md:w-6/6 mb-10  object-cover object-center'/>
                    </div>

             </div>


                {/* Hero section call to action */}
                <div className='flex space-x-8 font-poppins p-8 md:flex-row  md:mx-28 '>

                    <motion.button 
                     whileTap={{scale:0.8}}   
                     className='rounded full w-48 bg-accent p-2 text-white'
                     onClick={()=>{
                        scrollToHowToOrder()
                     }}
                     >
                     How To Order
                     </motion.button>

                    <motion.button whileTap={{scale:0.8}} 
                    className='rounded full w-48 text-secondary border border-bg-secondary p-2'
                    onClick={()=>{
                        scrollToMenu()
                    }}
                    >
                    See menu
                    </motion.button>
                </div>

            </div>
        </div>
     );
}
 
export default Hero;