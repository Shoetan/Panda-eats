import { useDispatch, useSelector } from "react-redux";
import { Minus, Plus } from "../icons";
import { increaseAmount } from "../features/foodorder/foodOrderSlice";



const DisplayCartItems = ({image,title,price,id,amount}) => {

    
    
    const dispatch = useDispatch()


   


 


return ( 


        <div className="">
            <div className="bg-secondary  rounded-xl p-4 flex justify-around items-center mb-1">

                <img src={image} alt="This is a trial" className="h-20" />

                <div className="">
                   <h2 className="font-poppins text-text_white">{title}</h2>
                   <span className="font-montserrat text-text_white"> NGN {price}</span>
                </div>

                <div className="flex gap-1">
                    <div className="cursor-pointer text-text_white" onClick={()=>{
                        
                    }}>
                        <Minus/>
                    </div>
                    <span className="text-text_white">{amount}</span>

                    <div className="cursor-pointer text-text_white" 
                    onClick={()=>{
                        dispatch(increaseAmount(id))

                    }}>
                        <Plus/>
                    </div>
                </div>

            </div>
        </div>
        
     );
}
 
export default DisplayCartItems;