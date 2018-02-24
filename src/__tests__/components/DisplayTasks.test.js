import React from 'react';
import {shallow} from 'enzyme';
import DisplayTasks from '../../components/DisplayTasks';
import Tasks from '../../fixtures/Tasks';
test('this is test case for display tasks',()=>{
    const wrapper=shallow(<DisplayTasks Tasks={Tasks}/>);
    expect(wrapper).toMatchSnapshot();
})
