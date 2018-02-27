import React from 'react';
import configureMockStore from 'redux-mock-store';
import {database,firebase} from '../../../firebase/firebase';
import {removeTask, removeTaskFunction} from '../../../store/Actions/RemoveTask';
import Tasks from '../../../fixtures/Tasks';
import thunk from 'redux-thunk';
const mockStore=configureMockStore([thunk]);
const uid='KoushikReddyTasks'
const store=mockStore({Auth:{uid}})

beforeEach((done)=>{
    const Tasks_Array={};
    Tasks.forEach((Task)=>{
        Tasks_Array[Task.id]={task:Task.task}
    })
    database.ref(`users/${uid}/Tasks`).set(Tasks_Array).then(()=>{
        done()
    })
    
})
test('remove expenses',(done)=>{
    store.dispatch(removeTaskFunction(Tasks[0].id)).then(()=>{
        const actions=store.getActions();
        expect(actions[0]).toEqual({
            type:'REMOVE_TASK',
            id:Tasks[0].id
        });
        
       
    })
    return database.ref(`users/${uid}/Tasks/${Tasks[0].id}`).once('value').then((snapshot)=>{
        expect(snapshot.val()).toBeFalsy();
        done();
    })
    
    
})
test('test for remove action without mock store',()=>{
    const remove_task=removeTask(Tasks[0].id);
    expect(remove_task).toEqual({
        type:'REMOVE_TASK',
        id:Tasks[0].id
    })
})
test('test for remove action with mock store',()=>{
    store.dispatch(removeTask(Tasks[0].id))
    const actions=store.getActions();
    expect(actions[0]).toEqual({
        type:'REMOVE_TASK',
        id:Tasks[0].id
    })
})