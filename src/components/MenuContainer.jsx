import Menu from "../pages/Menu"

const MenuContainer = () => {
  return (
    <div>
        
        {/* Create the menu header here */}
        <div className="flex flex-col items-center justify-center font-poppins mt-10 text-dark">
            <h2 className="text-3xl p-4 ">Menu</h2>
            <h4 className="text-sm opacity-90">Pick from below</h4>
        </div>

        <Menu/>



    </div>
  )
}

export default MenuContainer