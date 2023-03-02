import food1 from '../assets/food1.png'

const Hero = () => {
    return ( 

        //first div should have a width and height of 100vw
        <div>

           {/* This div will define the dimension of the hero section and every element in this hero section will fall into this div */}
            <div className="container mx-auto p-6 border md:p-28">

             <div className='flex'>

                {/* Hero section text  */}
                <div className='flex flex-col p-4 mt-8'>
                    <h1 className='font-poppins leading-tight text-xl mb-6  md:text-4xl w-5/6 '>CHOOSE THE BEST FRESHLY COOKED FOOD</h1>
                    <p className='font-poppins text-sm mb-8 md:w-3/6 '>Just confirm your order and enjoy our tasty meal.</p>
                </div>
             
                {/* Hero Image div */}
                <div>
                    <img src={food1} alt="" className='lg:w-5/6 md:w-3/6 mb-10 object-cover object-center'/>
                </div>

             </div>


                {/* Hero section call to action */}
                <div className='flex space-x-6 font-poppins -mt-9 p-2 md:-mt-32'>
                    <button className='rounded full bg-primary p-2  text-white'>Order now</button>
                    <button className='rounded full text-primary  border border-primary p-2 w-auto'>See menu</button>
                </div>

            </div>
        </div>
     );
}
 
export default Hero;