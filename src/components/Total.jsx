const Total = () => {
    return (  
        <div>

                    {  /* This section is the  total section and the checkout button that will lead to the checkout page */ }
            <div className="bg-secondary rounded-2xl h-96">
              
            {/* General div to hold both the subtotal and delivery section */}
             <div className="p-4 divide-y">
                        { /* Here will have the subtotal and amount */}
                        <div className="flex justify-around items-center mb-8 pt-8">
                            <h4 className="text-text_white font-montserrat text-lg font-medium">Sub Total</h4>
                            <span className="text-text_white font-montserrat    text-lg font-medium ">NGN 1000</span>
                        </div>

                {/* Here will have the cost of delivery and amount */}


                
                    <div className="flex justify-around items-center mb-8 pt-8">
                        <h4 className="text-text_white font-montserrat text-lg font-medium">Delivery </h4>
                        <span className="text-text_white font-montserrat text-lg font-medium">NGN 1000</span>
                    </div>
                



                <div className="flex flex-col"> 

                        <div className="flex justify-around items-center mb-8 pt-8">
                            <h4 className="text-text_white font-montserrat text-2xl font-semibold"> Total</h4>
                            <span className="text-text_white font-montserrat text-lg font-semibold ">NGN 1000</span>
                        </div>

                                
                        <button className="font-poppins bg-accent rounded-full w-3/4 mx-auto h-3/4 p-4 text-text_white text-xl"
                        onClick={() => {console.log("Do something")}}
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