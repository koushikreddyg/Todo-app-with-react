import React from 'react';
export default(state={},actions)=>{
    switch(actions.type){
        case 'SET_ID':
        return{
            uid:actions.uid
        }
        case 'REMOVE_ID':
        return {
            
        }
        default:return state
    }
}