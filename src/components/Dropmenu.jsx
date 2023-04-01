import { auth, provider } from '../firebase/firbase'
import { signInWithPopup, signOut } from 'firebase/auth';




const Dropdown = () => {


    const signInUser = () =>{
        signInWithPopup(auth, provider)
            .then((result) =>{
                window.localStorage.setItem('credentials',JSON.stringify(result));
            })

            .catch ((err) => {
                window.localStorage.setItem('error', err.message );
            })
    }

    const signOutUser = () => {
       signOut(auth)
        .then((result) => {
            console.log(result);
        })

        .catch ((err) => {
            console.log(err.message);
        })
    }

    return ( 
        <div>
                     {/*Drop down Menu*/}
                     <div className='border px-4 py-2 rounded-lg bg-gray-300 text-slate-700 flex items-center justify-center'>
                        <ul>
                            <li><a href="#"className='font-poppins text-sm hover:opacity-90'onClick={signInUser}>Login</a></li>
                            <li><a href="#"className='font-poppins text-sm hover:opacity-90'onClick={signOutUser}>Logout</a></li>
                        </ul>
                    </div>

        </div>
     );
}
 
export default Dropdown;