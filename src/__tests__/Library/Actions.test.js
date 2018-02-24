import React from 'react';
import {shallow} from 'enzyme'
import Actions from '../../Library/Actions';
import Tasks from '../../fixtures/Tasks';
test('test for validateID in Actions file',()=>{
    const validateID=Actions.validateId(Tasks,24);
    expect(validateID).toEqual(true);
})
test('test for errorcheck in Action file',()=>{
    const task='cricket';
    const errorcheck=Actions.errorCheck(task,Tasks);
    expect(errorcheck).toEqual([Tasks[0]]);
})