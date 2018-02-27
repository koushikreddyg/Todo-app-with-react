import React from 'react';
import {database} from '../../firebase/firebase';
export  const addtask=(Task)=>({
    type:'ADD_TASK',
    Task:Task
});
export const addTaskFunction=(object)=>{
    return(dispatch,getState)=>{
        const uid=getState().Auth.uid;
        return database.ref(`users/${uid}/Tasks`).push({task:object}).then((ref)=>{
            dispatch(addtask({
                id:ref.key,
                task:object
            }));
        })
    }
    
}


