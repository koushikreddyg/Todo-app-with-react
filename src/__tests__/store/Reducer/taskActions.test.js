import React from 'react';
import taskActions from '../../../store/Reducer/taskActions';
import addTask from '../../../store/Actions/AddTask';
import editTask from '../../../store/Actions/editTask';
import removeTask from '../../../store/Actions/RemoveTask';
import Tasks from '../../../fixtures/Tasks';
test('test for Reducers with no Actions',()=>{
    const TaskActions=taskActions(undefined,{type:'@@INIT'});
    expect(TaskActions).toEqual([])
});
test('test for no actions with addTask ',()=>{
const actions={
    type:'ADD_TASK',
    Task:Tasks[0],
}
const TaskActions=taskActions([],actions);
expect(TaskActions).toEqual([Tasks[0]])
});
test('test for remove task',()=>{
    const actions={
        type:'REMOVE_TASK',
        id:Tasks[0].id,
    }
const TaskActions=taskActions(Tasks,actions);
expect(TaskActions).toEqual([Tasks[1],Tasks[2]])
});
test('test Edit Task ',()=>{
    const actions={
        type:'EDIT_TASK',
        id:Tasks[0].id,
        object:{task:'NBA'}
    }
    const TaskActions=taskActions(Tasks,actions);
    expect(TaskActions).toEqual([{...Tasks[0],...{task:'NBA'}},Tasks[1],Tasks[2]])
});
