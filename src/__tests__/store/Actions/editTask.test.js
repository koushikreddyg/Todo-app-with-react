import React from 'react';
import {editTask,editTaskFunction} from '../../../store/Actions/editTask';
import {database,firebase} from '../../../firebase/firebase';
import {addtask,addTaskFunction} from '../../../store/Actions/AddTask';
import Tasks from '../../../fixtures/Tasks';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const mockStore=configureMockStore([thunk]);
const uid='KoushikEdit';
const store=mockStore({Auth:{uid}});
beforeEach((done)=>{
    const editArray={};
    Tasks.forEach((Task)=>{
        editArray[Task.id]={task:Task.task}
    })
    database.ref(`users/${uid}/Tasks`).set(editArray).then(()=>{
        done()
    })

})
test('testing edittaskFunction',(done)=>{
    store.dispatch(editTaskFunction(Tasks[0].id,{task:'NBA'})).then(()=>{
        const actions=store.getActions();
        expect(actions[0]).toEqual({
            type:'EDIT_TASK',
            id:Tasks[0].id,
            object:{task:'NBA'}
        });

    })
    database.ref(`users/${uid}/Tasks/${Tasks[0].id}`).once('value').then((snapshot)=>{
        expect(snapshot.val()).toEqual({task:'NBA'});
        done();
    })
    
})

test('edit task without mock store',()=>{
    const edit_task=editTask(Tasks[0].id,{task:'watching'});
    expect(edit_task).toEqual({
        type:'EDIT_TASK',
        id:Tasks[0].id,
        object:{task:'watching'}
    })
});
test('testing edit task with mock store',()=>{
    store.dispatch(editTask(Tasks[0].id,{task:'watching'}));
    const actions=store.getActions();
    expect(actions[1]).toEqual({
        type:'EDIT_TASK',
        id:Tasks[0].id,
        object:{task:'watching'}
    })
})