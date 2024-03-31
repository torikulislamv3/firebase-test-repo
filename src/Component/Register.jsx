// import React from 'react';
import  { getAuth, signInWithPopup } from 'firebase/auth'
import app from '../firebase.init';
import { GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';

const Register = () => {
    const [user, setUser] = useState()
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();

    const btnGoogle = ()=>{
        console.log('clicked');
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const userGoogle = result.user;
            setUser(userGoogle);
            console.log(userGoogle);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className="register">
            <h1>
                Register Now!
            </h1>
            <div>
                <button className="btn-log" onClick={btnGoogle}>Google</button>
                <button className="btn-log">Github</button>
            </div>

            <div>
                <h2>
                    Name :{user?.displayName}
                </h2>
                <h4>
                    Email: {user?.email}
                </h4>
                <img src={user?.photoURL} alt="" />
            </div>
        </div>
    );
};

export default Register;