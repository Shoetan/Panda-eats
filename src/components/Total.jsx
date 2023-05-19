
import { useEffect, useState } from "react";
import { useSelector,useDispatch} from "react-redux";
import { usePaystackPayment } from "react-paystack";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firbase";
import { clearSelectedFoodId } from "../features/foodorder/foodOrderSlice";
import { clearCount } from "../features/counter/counterSlice";






const Total = () => {

    //get credentials of logged in user

    const [user] = useAuthState(auth)
 


   //state to hold the subtotal of all items in the selection
    const [subTotalAmount, setSubTotalAmount] = useState(0)

    const delivery = 2.5

    const total  = subTotalAmount + delivery



    //Get the array of selected food from the store

    const foodsInCheckOut=  useSelector((state) => state.foodSelected.value)

    const dispatch = useDispatch()



   //paystack configuration settings
    const config = {
        reference:(new Date().getTime().toString()),
        email: user?.email,
        amount: (total * 100),
        publicKey: import.meta.env.VITE_PAYSTACK_API_KEY,
    }



    // callback function to happen when the payment is successful
    const onSuccess =(reference) =>{
        alert(`NGN${total} successfully paid ${reference}` )
    }


    // initialize paystack payment
    const initializePayment = usePaystackPayment(config)




    //use the useEffect hook to load reducer on page load so the values will not not be zero.
   useEffect (() =>{


    // The reduce method is used to reduce the total property of each item in the array to one single value

        setSubTotalAmount(foodsInCheckOut.reduce((total,item) =>{
            return total + item.total
    }, 0))

   },[foodsInCheckOut])


   


// NB: Create another element in the object called subtotal. Use the ID to create the total of the element by multiplying the amount and id then add it to the total 

    return (  
        <div>

                    {  /* This section is the  total section and the checkout button that will lead to the checkout page */ }
            <div className="bg-secondary rounded-2xl h-96">
              
            {/* General div to hold both the subtotal and delivery section */}
             <div className="p-4 divide-y">
                        { /* Here will have the subtotal and amount */}
                        <div className="flex justify-around items-center mb-8 pt-8">
                            <h4 className="text-text_white font-montserrat text-lg font-medium">Sub Total</h4>
                            <span className="text-text_white font-montserrat    text-lg font-medium ">NGN {subTotalAmount} </span>
                        </div>

                {/* Here will have the cost of delivery and amount */}


                
                    <div className="flex justify-around items-center mb-8 pt-8">
                        <h4 className="text-text_white font-montserrat text-lg font-medium">Delivery </h4>
                        <span className="text-text_white font-montserrat text-lg font-medium">NGN {delivery} </span>
                    </div>
                



                <div className="flex flex-col"> 

                        <div className="flex justify-around items-center mb-8 pt-8">
                            <h4 className="text-text_white font-montserrat text-2xl font-semibold"> Total</h4>
                            <span className="text-text_white font-montserrat text-lg font-semibold ">NGN {total}</span>
                        </div>

                                
                        <button className="font-poppins bg-accent rounded-full w-3/4 mx-auto h-3/4 p-4 text-text_white text-xl"
                        onClick={() => {

                            //using optional chaining and tenary operators if there is no user email it means no one is signed up hence a sign up is needed.

                            user?.email ?
                            initializePayment(onSuccess) :
                            alert("Please click on avatar and sign up")

                            dispatch(clearSelectedFoodId())
                            dispatch(clearCount())
                        }}
                        >
                        Checkout
                        </button>
                </div>


                
             </div>

            </div>




        </div>
    );
}
 
export default Total;