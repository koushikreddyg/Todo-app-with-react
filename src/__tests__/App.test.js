import React from 'react';
import toJSON from 'enzyme-to-json';
import {shallow} from 'enzyme'
import App from '../App';

test('test App.js File ',()=>{
   const wrapper=shallow(<App/>);
   expect(wrapper).toMatchSnapshot();
})