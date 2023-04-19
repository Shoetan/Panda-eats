import { auth, provider } from '../firebase/firbase'
import { signInWithPopup, signOut } from 'firebase/auth';




const Dropdown = () => {


    const signInUser = () =>{
        signInWithPopup(auth, provider)
            .then((result) =>{
                window.localStorage.setItem('credentials',JSON.stringify(result));
                alert('You are loggedin in successfully')
            })

            .catch ((err) => {
                window.localStorage.setItem('error', err.message );
            })
    }

    const signOutUser = () => {
       signOut(auth)
        .then((result) => {
            alert(`${result} logged out successfully`);

        })

        .catch ((err) => {
            alert(err.message);
        })
    }

    return ( 
        <div>
                     {/*Drop down Menu*/}
                     <div className='w-36 border px-4 py-2 rounded-lg bg-gray-300 text-slate-700 flex flex-col absolute top-24 right-0 '>
                        <ul>
                            <li><a href="#"className='font-poppins text-sm hover:opacity-90'onClick={signInUser}>Login</a></li>
                            <li><a href="#"className='font-poppins text-sm hover:opacity-90'onClick={signOutUser}>Logout</a></li>
                        </ul>
                    </div>

        </div>
     );
}
 
export default Dropdown;