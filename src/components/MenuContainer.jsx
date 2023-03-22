import Menu from "../pages/Menu"
import cartItems from "../assets/cartItems"
import { useDispatch } from 'react-redux'
import { decreaseCount, increaseCount } from '../features/counter/counterSlice'



const MenuContainer = () => {


    //handy man to carry out  an action on the redux store
    const dispatch = useDispatch()

    const handleClick = () =>{
       dispatch(increaseCount())
    }

    const remove = () =>{
        dispatch(decreaseCount())
    }


  return (
    <div>
        
        {/* Create the menu header here */}
        <div className="flex flex-col items-center justify-center font-poppins mt-10 text-dark">
            <h2 className="text-3xl p-4 ">Menu</h2>
            <h4 className="text-sm opacity-90">Pick from below</h4>
        </div>

        

        {/* get the data of the items from the cartItems.js file and map through them afterward destructure the  new array to get individual elements of the array */}

        <div className="container flex flex-col mx-auto justify-between mt-8 p-8 md:grid grid-cols-3 gap-8">
                {  cartItems.map(cartItem =>{

                    //destructure from the objects
                    const {id, title, price, image, amount } = cartItem

                    return <Menu
                        key={id}
                        title = {title}
                        price={price}
                        image ={image}
                        amount = {amount}
                        action = {handleClick}
                        diction = {remove}
                        
                        
                    />

                        
                
                })  
                }

                
        </div>




    </div>
  )
}

export default MenuContainer