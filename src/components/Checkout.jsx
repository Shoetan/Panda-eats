import { useSelector } from "react-redux";



const Checkout = () => {

        //get the current value of the state from the store
    const isOpen = useSelector((state) => state.checkout.value)

    return ( 

        <div>
            <h2>This is the check heree</h2>
            {isOpen}
        </div>
     );
}
 
export default Checkout;