import Menu from "../pages/Menu"
import cartItems from "../assets/cartItems"
import { useDispatch } from 'react-redux'
import { increaseCount } from '../features/counter/counterSlice'


const MenuContainer = () => {
    const dispatch = useDispatch()

    const handleClick =() =>{
        dispatch(increaseCount())
    }


  return (
    <div>
        
        {/* Create the menu header here */}
        <div className="flex flex-col items-center justify-center font-poppins mt-10 text-dark">
            <h2 className="text-3xl p-4 ">Menu</h2>
            <h4 className="text-sm opacity-90">Pick from below</h4>
        </div>

        

        {/* fetch the data of the api here and use the map function to loop throught the json array and supply that as the probs to the menu components */}

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
                        action ={handleClick}
                        
                    />

                        
                
                })  
                }
        </div>




    </div>
  )
}

export default MenuContainer