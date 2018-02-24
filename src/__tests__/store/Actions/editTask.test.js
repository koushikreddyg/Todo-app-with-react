import React from 'react';
import editTask from '../../../store/Actions/editTask';
import configureMockStore from 'redux-mock-store';
import Tasks from '../../../fixtures/Tasks';
test('edit task without mock store',()=>{
    const edit_task=editTask(Tasks[0].id,{task:'watching'});
    expect(edit_task).toEqual({
        type:'EDIT_TASK',
        id:Tasks[0].id,
        object:{task:'watching'}
    })
});
test('testing edit task with mock store',()=>{
    const configureStore= configureMockStore({});
    const store=configureStore();
    store.dispatch(editTask(Tasks[0].id,{task:'watching'}));
    const actions=store.getActions();
    expect(actions[0]).toEqual({
        type:'EDIT_TASK',
        id:Tasks[0].id,
        object:{task:'watching'}
    })
})