import React from 'react';
import {shallow} from 'enzyme';
import {Home} from '../../Router/Home';
import Tasks from '../../fixtures/Tasks';
import configureMockStore from 'redux-mock-store';
import Thunk from 'redux-thunk';
import AddTask from '../../store/Actions/AddTask';

test('Home page with change of input',()=>{
    const wrapper=shallow(<Home />)
    const value='koushik';
    expect(wrapper).toMatchSnapshot();
    wrapper.find('Search').simulate('change',{
        target:{value},
        preventDefault:()=>{}
    })
    expect(wrapper.state('task')).toBe(value)
})
test('Home page with Submit button simulated',()=>{
    const addTask1=jest.fn();
    const task='FIFA';
    const wrapper=shallow(<Home addTask={addTask1} Tasks={Tasks}/>);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('Search').simulate('change',{
        target:{value:task},
        preventDefault:()=>{}
    })
    wrapper.find('form').simulate('submit',
   { preventDefault:()=>{}}
)
expect(wrapper.state('error')).toBe(undefined)
expect(addTask1).toHaveBeenLastCalledWith({
    task:"FIFA",
    id:expect.any(Number)
})

})
test('test with mock store in dispatch add Task',()=>{
    const mockStore=configureMockStore({});
    const store=mockStore({});
    store.dispatch(AddTask(Tasks[0]));
    const actions=store.getActions();
    expect(actions[0]).toEqual({
        type:'ADD_TASK',
        Task:Tasks[0]
    });
})