const Footer = () => {

    return ( 
        <div>

        {/* First container to hold the two components of the footer  */}
           <div className="bg-gradient-to-r from-dark to-secondary text-background font-poppins p-4 flex flex-col mt-10 sm:justify-around sm:flex-row">
 
              <div className="mb-6">
                <h2 className="text-lg mb-2">LOCATIONS</h2>

                <div className="text-sm font-light">
                  <div className="mb-2">
                        <p>376 Van Burnt St</p>
                        <p>Brooklyn -11231</p>
                  </div>

                  <div>
                      <p>25 Union Square West</p>
                      <p>New York, NY -10003</p>
                  </div>
                </div>

              </div>

              <div>
                <h2>Hours</h2>

                <div className="text-sm font-light">
                  <div>
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