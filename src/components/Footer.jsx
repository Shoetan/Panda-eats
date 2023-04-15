const Footer = () => {

    return ( 
        <div>

        {/* First container to hold the two components of the footer  */}
           <div className=" bg-gradient-to-r from-primary to-teal-400 p-4 flex flex-col mt-20 sm:justify-around sm:flex-row">
 
              <div className="mb-6">
                <h2 className="text-lg mb-2 text-text_dark font-poppins font-medium">LOCATIONS</h2>

                <div className="text-sm font-light">
                  <div className="mb-2 text-text_dark font-montserrat">
                        <p>376 Van Burnt St</p>
                        <p>Brooklyn -11231</p>
                  </div>

                  <div className="font-montserrat">
                      <p>25 Union Square West</p>
                      <p>New York, NY -10003</p>
                  </div>
                </div>

              </div>

              <div>
                <h2 className="text-lg mb-2 text-text_dark font-poppins font-medium">Hours</h2>

                <div className="text-sm font-light">
                  <div className="font-montserrat">
                    <p>
                        Monday - Thursday
                    </p>
                    <p>
                        5:30pm - 10:pm
                    </p>
                  </div>
                </div>




              </div>

           
           </div>
             
        
        </div>
     );
}
 
export default Footer;