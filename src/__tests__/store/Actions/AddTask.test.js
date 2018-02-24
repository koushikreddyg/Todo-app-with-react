import React from 'react';
import AddTask from '../../../store/Actions/AddTask';
import Tasks from '../../../fixtures/Tasks';
import configureMockStore from 'redux-mock-store';
test('Add task with testing actions ',()=>{
    const Addtask=AddTask(Tasks[0]);
    expect(Addtask).toEqual({
        type:'ADD_TASK',
        Task:{
            id:Tasks[0].id,
            task:Tasks[0].task
        }
    })
})
test('test with mock store',()=>{
    const mockstore=configureMockStore([]);
    const store=mockstore({});
    store.dispatch(AddTask(Tasks[1]));
    const actions=store.getActions();
    expect(actions[0]).toEqual({
        type:'ADD_TASK',
        Task:{
            id:Tasks[1].id,
            task:Tasks[1].task
        }
    })
})