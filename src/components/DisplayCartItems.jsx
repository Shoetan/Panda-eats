import { useDispatch, useSelector } from "react-redux";
import { Minus, Plus } from "../icons";
import {  decreaseSelectedFoodAmount, increaseSelectedFoodAmount } from "../features/foodorder/foodOrderSlice";



const DisplayCartItems = ({ image, title, price, amount, id }) => {



    const dispatch = useDispatch()


    const handleIncreaseAmount = (id) =>{

        dispatch(increaseSelectedFoodAmount({id, amount: 1}))
    }



    const handleDecreaseAmount = (id) =>{
        dispatch(decreaseSelectedFoodAmount({id, amount: 1}))
    }



    return (


        <div className="">
            <div className="bg-secondary  rounded-xl p-4 flex justify-around items-center mb-1">

                <img src={image} alt="This is a trial" className="h-20" />

                <div className="">
                    <h2 className="font-poppins text-text_white">{title}</h2>
                    <span className="font-montserrat text-text_white"> NGN {price}</span>
                </div>

                <div className="flex gap-1">
                    <div className="cursor-pointer text-text_white" onClick={() => {

                        handleDecreaseAmount(id)

                    }}>
                        <Minus />
                    </div>
                    <span className="text-text_white">{amount}</span>

                    <div className="cursor-pointer text-text_white"
                        onClick={() => {

                            handleIncreaseAmount(id)
                            

                        }}>
                        <Plus />
                    </div>
                </div>

            </div>
        </div>

    );
}

export default DisplayCartItems;