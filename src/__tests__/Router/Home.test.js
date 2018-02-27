import React from 'react';
import {shallow} from 'enzyme';
import {Home} from '../../Router/Home';
import Tasks from '../../fixtures/Tasks';
import configureMockStore from 'redux-mock-store';
import Thunk from 'redux-thunk';
import {addTaskFunction} from '../../store/Actions/AddTask';

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
    const addTaskFunction=jest.fn();
    const task='FIFA';
    const wrapper=shallow(<Home addTaskFunction={addTaskFunction} Tasks={Tasks}/>);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('Search').simulate('change',{
        target:{value:task},
        preventDefault:()=>{}
    })
    wrapper.find('form').simulate('submit',
   { preventDefault:()=>{}}
)
expect(wrapper.state('error')).toBe(undefined)
expect(addTaskFunction).toHaveBeenLastCalledWith("FIFA");

})
// test('test with mock store in dispatch add Task',()=>{
//     const mockStore=configureMockStore({});
//     const store=mockStore({});
//     store.dispatch(AddTask(Tasks[0]));
//     const actions=store.getActions();
//     expect(actions[0]).toEqual({
//         type:'ADD_TASK',
//         Task:Tasks[0]
//     });
// })