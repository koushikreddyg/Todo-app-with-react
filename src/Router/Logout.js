import React from 'react';
import {firebase,googleProvider,database} from '../firebase/firebase';
const Logout=(props)=>(
    <div>
    <button onClick={(e)=>{
        firebase.auth().signOut().then(()=>{
          
        })
       
    }}>Logout</button>
    </div>
)
export default Logout