import React from 'react';
import {shallow} from 'enzyme';
import NotFound from '../../Router/NotFound';
test('not found page',()=>{
    const wrapper=shallow(<NotFound/>);
    expect(wrapper).toMatchSnapshot();
})