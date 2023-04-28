import { BackArrow, Clear } from "../icons";
import { isOpen } from "../features/checkout/checkoutSlice";
import DisplayCartItems from "./DisplayCartItems";
import { useDispatch } from "react-redux";
import { clearCount } from "../features/counter/counterSlice";

const CheckOut = () => {

    const dispatch = useDispatch()



   

    return ( 

        <div>
            <div className="fixed top-0 right-0 h-screen w-full z-[101] bg-stone-100 rounded-t-3xl opacity-95 md:w-96">

            <div className="flex items-center justify-between p-4 cursor-pointer">
                    {/* Add the onclick event to this div to return the state of the modal to the opposite of the current state. Use the same function the checkout cart here*/}

                    <div className=""
                    onClick={ () => {
                        dispatch(isOpen())
                        
                        
                    }}>
                        <BackArrow/>
                    </div>

                    {/* add the onclick event on this div to clear the checkout and return everything to null */}

                    <div className="flex font-extralight gap-1 border border-secondary p-2 rounded-full bg-accent"
                    onClick={()=>{
                        dispatch(clearCount())
                    }}
                    >
                        <p className="font-montserrat text-secondary font-medium">Clear</p>
                        <Clear/>
                        
                    </div>
            </div>


            {/* Display cart items */}
            <div>
                    <DisplayCartItems/>
            </div>
            


            </div>
        </div>
     );
}
 
export default CheckOut;