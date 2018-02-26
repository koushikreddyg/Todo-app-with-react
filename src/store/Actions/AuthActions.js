import React from 'react';
export const setUID=(id)=>({
    type:'SET_ID',
    uid:id
})
export const removeUID=()=>({
    type:'REMOVE_ID'
})