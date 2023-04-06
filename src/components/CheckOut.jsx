import { BackArrow, Clear } from "../icons";
import { useDispatch } from "react-redux";
import { isOpen } from "../features/checkout/checkoutSlice";

const CheckOut = () => {

    const dispatch = useDispatch()

    return ( 

        <div>
            <div className="fixed top-0 right-0 h-screen w-full z-[101] bg-stone-100 md:w-96">

            <div className="flex  items-center justify-between p-4 cursor-pointer">
                    {/* Add the onclick event to this div to return the state of the modal to the opposite of the current state. Use the same function the checkout cart herr */}

                    <div className=""
                    onClick={ () => {
                        dispatch(isOpen())
                    }}>
                        <BackArrow/>
                    </div>

                    {/* add the onclick event on this div to clear the checkout and return everything to null */}

                    <div className="flex font-poppins font-extralight gap-1 border border-neutral-800 p-1 rounded-full">
                        <p>clear</p>
                        <Clear/>
                        
                    </div>
            </div>
            


            </div>
        </div>
     );
}
 
export default CheckOut;