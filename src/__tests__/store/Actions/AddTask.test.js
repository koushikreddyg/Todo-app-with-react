import React from 'react';
import {addtask,addTaskFunction} from '../../../store/Actions/AddTask';
import {database,firebase} from '../../../firebase/firebase';
import Tasks from '../../../fixtures/Tasks';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const mockStore=configureMockStore([thunk]);
const uid='KoushikADDTasks';
const store= mockStore({Auth:{uid}})
beforeEach((done)=>{
    const Task_Array={};
    Tasks.forEach((Task)=>{
        Task_Array[Task.id]={task:Task.task};
    })
    database.ref(`users/${uid}/Tasks`).set(Task_Array).then(()=>{
        done()
    })
   
})
test('testing addtaskFunction',(done)=>{
    const task='NBA1'
    store.dispatch(addTaskFunction(task)).then(()=>{
        const actions=store.getActions();
        expect(actions[0]).toEqual({
            type:'ADD_TASK',
            Task:{
                id:expect.any(String),
                task:task,
            }
            
        })
        return database.ref(`users/${uid}/Tasks/${actions[0].Task.id}`).once('value').then((snapshot)=>{
            expect(snapshot.val()).toEqual({task:task});
            done()
        })

    })
    
    
})


test('Add task with testing actions ',()=>{
    const Addtask=addtask(Tasks[0]);
    expect(Addtask).toEqual({
        type:'ADD_TASK',
        Task:Tasks[0]
    })
})


test('test with mock store',()=>{
    const task='COKE'
    store.dispatch(addtask(task))
        const actions=store.getActions();
    expect(actions[1]).toEqual({
        type:'ADD_TASK',
        Task:task
    })
    })
