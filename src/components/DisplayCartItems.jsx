import { useDispatch, useSelector } from "react-redux";
import { Minus, Plus } from "../icons";
import { decreaseSelectedFoodAmount, decreaseTotalOfSelectedFood, increaseSelectedFoodAmount, calculateTotalOfSelectedFood, removeSelectedFood } from "../features/foodorder/foodOrderSlice";
import { decreaseCount } from "../features/counter/counterSlice";



const DisplayCartItems = ({ image, title, price, amount, id }) => {



    const dispatch = useDispatch()

    //This function will increase the amount of the specific food item by 1 everytime the plus button is pressed

    const handleIncreaseAmount = (id) => {

        dispatch(increaseSelectedFoodAmount({ id, amount: 1 }))
    }


    //This function will decrease the amount of a specific food item by 1 everytime the mminus button is pressed

    const handleDecreaseAmount = (id) => {
        dispatch(decreaseSelectedFoodAmount({ id, amount: 1 }))
    }

    //This function will remove a specific food item from the array based on the id

    const handleRemoveFood = (id) => {
        dispatch(removeSelectedFood({ id }))
    }


    //this fucntion will decrease the counter also as the item is being removed from the cart 

    const decreaseCounter = () => {

        dispatch(decreaseCount())

    }


    //this function will calculate the subtotal of the total property of the objects elements in the array.

    const handleTotal = (id) => {

        dispatch(calculateTotalOfSelectedFood({ id }))

    }



    return (


        <div className="">
            <div className="bg-secondary  rounded-xl p-4 flex justify-around items-center mb-1">


                <img src={image} alt={title} className="h-20" />


                <div className="">
                    <h2 className="font-poppins text-text_white">{title}</h2>
                    <span className="font-montserrat text-text_white">$ {price}</span>

                    <p className="font-montserrat text-text_white mt-4 cursor-pointer" onClick={() => {

                        handleRemoveFood(id)
                        decreaseCounter()



                    }}>Remove Item</p>

                </div>

                <div className="flex gap-1">
                    <div className="cursor-pointer text-text_white" onClick={() => {

                        handleDecreaseAmount(id)
                        handleTotal(id)

                    }}>
                        <Minus />
                    </div>
                    <span className="text-text_white">{amount}</span>

                    <div className="cursor-pointer text-text_white"
                        onClick={() => {

                            handleIncreaseAmount(id)


                            handleTotal(id)

                        }}>
                        <Plus />
                    </div>
                </div>

            </div>
        </div>

    );
}

export default DisplayCartItems;