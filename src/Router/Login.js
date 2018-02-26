import React from 'react';
import {firebase,googleProvider,database} from '../firebase/firebase';
const Login=(props)=>(
    <div>
    <button onClick={(e)=>{
        firebase.auth().signInWithPopup(googleProvider).then(()=>{
            
        })
        
    }}>Login</button>
    </div>
)
export default Login