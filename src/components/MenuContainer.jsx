import Menu from "../pages/Menu"
import cartItems from "../assets/cartItems"
import { useDispatch } from 'react-redux'
import { increaseCount } from "../features/counter/counterSlice"

const MenuContainer = () => {


    //handy man to carry out  an action on the redux store
    const dispatch = useDispatch()

    // Incremental function to increment
    const increaseCounter = () =>{
       dispatch(increaseCount())
    }

    

   


  return (
    <div>
        
        {/* Create the menu header here */}
        <div className="flex flex-col items-center justify-center mt-10 ">
            <h2 className="text-3xl p-4 text-secondary font-poppins">Menu</h2>
            <h4 className="text-sm text-secondary font-montserrat">Pick from below</h4>
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
                        increaseCount = {increaseCounter}
                        id = {id}
                        
                        
                    />

                        
                
                })  
                }

                
        </div>
        




    </div>
  )
}

export default MenuContainer