import { 
    useDispatch,
    useSelector
 } from "react-redux";


const DisplayCartItems = () => {

//const dispatch = useDispatch()

//import the array containing the id of the food items the user selects from the store 
const foodId = useSelector((state)=> state.foodId.value)

const press = () => {
  console.log( foodId);
}


return ( 


        <div>
            <button
            onClick={() =>{
                press()
            }}            
            >CLick Here</button>
        </div>
        
     );
}
 
export default DisplayCartItems;