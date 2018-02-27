import {database} from '../../firebase/firebase';
export const removeTask=(id)=>({
    type:'REMOVE_TASK',
    id
})
export const removeTaskFunction=(id)=>{
return(dispatch,getState)=>{
    const uid= getState().Auth.uid;
    return database.ref(`users/${uid}/Tasks/${id}`).remove().then(()=>{
        dispatch(removeTask(id))
    })
}
}
