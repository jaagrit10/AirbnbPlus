import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import {auth,db} from "./Fire.js";
import React, { useState } from 'react';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

function RegisterUser() {
    // const auth = getAuth();
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [firstName, setFirstName] = useState("pulkit");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState(0);
    const [user] = useAuthState(auth);
    const uid = (user) ? user.uid : "0";

    // const [airid, setAirid] = useState(0);
    const [city, setCity] = useState("Chandigarh");
    
    const createUserFirestore = async () => {
        console.log("yo")
        // e.preventDefault();
        const ref = collection(db,'cities');
        addDoc(ref,{airid:uid,firstName:firstName, lastName:lastName, Age: age, cityResidence: city});
      };
    // const registerUser = async () =>{
    //     try {
    //         const user = await createUserWithEmailAndPassword(
    //             auth,
    //             registerEmail,
    //             registerPassword,
    //         );
    //         // setpop(false);
    //         console.log(user)
    //         // login();
    //         // setidk(false);  
    //     } catch (error) {
    //         console.log(error.message)
    //     }
    
    //   }

    //   const login = async () =>{
    //     try {
    //         const user = await signInWithEmailAndPassword(
    //             auth,
    //             registerEmail,
    //             registerPassword,
    //         );
    //         // setpop(false);
    //         console.log(user)

    //         // setidk(false);  
    //     } catch (error) {
    //         console.log(error.message)
    //     }
    
    //   }
  return (
    <div><div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
        <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-blue-600" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
        </div>
        <h3 className="text-2xl font-bold text-center">Join us</h3>
        <form action="">
            <div className="mt-4">
                <div>
                    <label className="block" htmlFor="Name">Name</label>
                            <input type="text" placeholder="Name"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="mt-4">
                    <label className="block" htmlFor="email">Email</label>
                            <input type="text" onChange={(event)=>{setRegisterEmail(event.target.value)}} placeholder="Email"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="mt-4">
                    <label className="block">Password</label>
                            <input type="password" onChange={(event)=>{setRegisterPassword(event.target.value)}} placeholder="Password"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="mt-4">
                    <label className="block">Confirm Password</label>
                            <input type="password" placeholder="Password"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                {/* <span className="text-xs text-red-400">Password must be same!</span> */}
                <div className="flex">
                    <button onClick={createUserFirestore} className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Create
                        Account</button>
                </div>
                <div className="mt-6 text-grey-dark">
                    Already have an account?
                    <Link className="text-blue-600 hover:underline" to="/register" onClick={createUserFirestore}>
                        Log in
                    </Link>
                </div>
            </div>
        </form>
    </div>
</div>
</div>
  )
}

export default RegisterUser