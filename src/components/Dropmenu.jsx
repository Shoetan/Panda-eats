import { auth, provider } from '../firebase/firbase'
import { signInWithPopup } from 'firebase/auth';




const Dropdown = () => {


    const signIn = () =>{
        signInWithPopup(auth, provider)
            .then((result) =>{
                console.log(result);
            })

            .catch ((err) => {
                console.log(err);
            })
    }

    return ( 
        <div>
                     {/*Drop down Menu*/}
                     <div className='border p-2 rounded-lg bg-gray-300 text-slate-700'>

                        <button onClick={signIn}>
                            login
                        </button>
                   
                    </div>

        </div>
     );
}
 
export default Dropdown;