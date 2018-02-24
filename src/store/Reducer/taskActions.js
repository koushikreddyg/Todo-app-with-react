const taskActions=(state=[],actions)=>{
    switch(actions.type){
        case 'ADD_TASK':
        return [
            ...state,actions.Task
        ]
        case 'REMOVE_TASK':
        return state.filter((item)=>{
            return item.id!==actions.id
        })
        case 'EDIT_TASK':
        return state.map((item)=>{
            if(item.id===actions.id){
                return {
                    ...item,...actions.object
                }
            }
            else{
                return item
            }
        })
         default: return state
    }
}
export default taskActions;