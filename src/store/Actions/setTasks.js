export const setTasks=(Tasks)=>({
    type:'SET_TASKS',
    Tasks:Tasks,
})
export default (Tasks)=>{
    return(dispatch)=>{
        dispatch(setTasks(Tasks))
    }
}