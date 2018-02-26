import {database} from '../../firebase/firebase';
const removeTask=(id)=>({
    type:'REMOVE_TASK',
    id
})
export const removeTaskFunction=(id)=>{
return(dispatch,getState)=>{
    const uid= getState().Auth.uid;
    database.ref(`users/${uid}/Tasks/${id}`).remove().then(()=>{
        dispatch(removeTask(id))
    })
}
}
export default removeTask;