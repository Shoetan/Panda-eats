import { BackArrow, Clear } from "../icons";
import { isOpen } from "../features/checkout/checkoutSlice";
import DisplayCartItems from "./DisplayCartItems";
import { useDispatch, useSelector } from "react-redux";
import { clearCount } from "../features/counter/counterSlice";
import { clearSelectedFoodId } from "../features/foodorder/foodOrderSlice";
import Total from "./Total";

const CheckOut = () => {

    const dispatch = useDispatch()


    //get the array containing the id of the food items the user selects from the store 
    const foodsInCheckOut = useSelector((state) => state.foodSelected.value)


    return (

        <div>
            <div className="fixed top-0 right-0 h-screen w-full z-[101] bg-stone-100 rounded-t-3xl opacity-95 md:w-96 overflow-y-scroll snap-y">

                <div className="flex items-center justify-between p-4 cursor-pointer">
                    {/* Add the onclick event to this div to return the state of the modal to the opposite of the current state. Use the same function the checkout cart here*/}

                    <div className=""
                        onClick={() => {
                            dispatch(isOpen())


                        }}>
                        <BackArrow />
                    </div>

                    {/* add the onclick event on this div to clear the checkout and return everything to null */}

                    <div className="flex font-extralight gap-1 border border-secondary p-2 rounded-full bg-accent"
                        onClick={() => {
                            dispatch(clearCount())
                            dispatch(clearSelectedFoodId())
                        }}
                    >
                        <p className="font-montserrat text-secondary font-medium">Clear</p>
                        <Clear />

                    </div>
                </div>


                {/* Display cart items */}
                <div className="">

                    {
                        foodsInCheckOut.map(food => {
                            const { id, title, image, price, amount, total } = food

                            return <DisplayCartItems

                                key={id}
                                image={image}
                                title={title}
                                price={price}
                                amount={amount}
                                id={id}
                                total={total}



                            />
                        })


                    }

                </div>


                {/*  Check the length of the food array coming from the store. If it is not zero display the total component that has the total and the checkout button  */}

                {
                    foodsInCheckOut.length > 0 ? <Total /> : null

                }

            </div>
        </div>
    );
}

export default CheckOut;