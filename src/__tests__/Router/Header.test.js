import React from 'react';
import Header from '../../Router/Header';
import {shallow} from 'enzyme';
test('test header from Router',()=>{
    const wrapper=shallow(<Header/>);
    expect(wrapper).toMatchSnapshot();
})