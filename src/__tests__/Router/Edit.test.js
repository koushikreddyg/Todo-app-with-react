import React from 'react';
import {shallow} from 'enzyme';
import {Edit} from '../../Router/Edit';
import Actions from '../../Library/Actions';
import Tasks from '../../fixtures/Tasks';
import configureMockStore from 'redux-mock-store';
import EditTask from '../../store/Actions/editTask';
import RemoveTask from '../../store/Actions/RemoveTask';
test('this is test case for edit without any props ',()=>{
    const history = { push: jest.fn() };
    const editTask=jest.fn();
    const removeTask=jest.fn();
    const wrapper = shallow(<Edit 
    Tasks={Tasks} 
    editTask={editTask}
    removeTask={removeTask}
    history={history}
    ID={Tasks[0].id}
    editTask1={Tasks[0]}
    />);
    const value='cricket123';
    expect(wrapper).toMatchSnapshot();
   expect(wrapper.state('editValue')).toBe('Cricket');
   expect(wrapper.state('id')).toBe(24)
   wrapper.find('Search').at(0).simulate('change',{target:{value},
   preventDefault:()=>{}
})
   expect(wrapper.state('editValue')).toBe('cricket123');
   expect(wrapper.state('id')).toBe(24);
   wrapper.find('form').simulate('submit',{
   preventDefault:()=>{}})
    expect(editTask).toHaveBeenLastCalledWith(24,{task:value})
    expect(history.push).toHaveBeenLastCalledWith('/')
})
test('Remove a task from the ',()=>{
    const history = { push: jest.fn() };
    const editTask=jest.fn();
    const removeTask=jest.fn();
    const wrapper = shallow(<Edit 
    Tasks={Tasks} 
    editTask={editTask}
    removeTask={removeTask}
    history={history}
    ID={Tasks[1].id}
    editTask1={Tasks[1]}
    />);
    
    expect(wrapper).toMatchSnapshot();
    wrapper.find('Button').at(1).simulate('click',{
        preventDefault:()=>{}
    });
   expect(removeTask).toHaveBeenLastCalledWith(Tasks[1].id)
    expect(history.push).toHaveBeenLastCalledWith('/');
})
test('dispatching actions to the store',()=>{
    const mockStore=configureMockStore([]);
    const store=mockStore({});
    store.dispatch(EditTask(Tasks[0].id,{task:'NBA'}));
    store.dispatch(RemoveTask(Tasks[0].id))
    const actions=store.getActions();
    expect(actions[0]).toEqual({
        type:'EDIT_TASK',
        id:Tasks[0].id,
        object:{task:'NBA'}
    })
    expect(actions[1]).toEqual({
        type:'REMOVE_TASK',
        id:Tasks[0].id
    })
})