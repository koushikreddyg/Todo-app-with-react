import React from 'react';
import Router from '../../Router/Router';
import {shallow} from 'enzyme';
test('should test router',()=>{
    const wrapper=shallow(<Router/>);
    expect(wrapper).toMatchSnapshot();
})