const addTask=({id=0,task=''})=>({
    type:'ADD_TASK',
    Task:{
        id,
        task
    }
})
export default addTask;