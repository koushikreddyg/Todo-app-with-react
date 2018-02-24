import React from 'react';
import configureMockStore from 'redux-mock-store';
import RemoveTask from '../../../store/Actions/RemoveTask';
import Tasks from '../../../fixtures/Tasks';
test('test for remove action without mock store',()=>{
    const remove_task=RemoveTask(Tasks[0].id);
    expect(remove_task).toEqual({
        type:'REMOVE_TASK',
        id:Tasks[0].id
    })
})
test('test for remove action with mock store',()=>{
    const configureStore= configureMockStore([]);
    const store=configureStore({});
    store.dispatch(RemoveTask(Tasks[1].id))
    const actions=store.getActions();
    expect(actions[0]).toEqual({
        type:'REMOVE_TASK',
        id:Tasks[1].id
    })
})