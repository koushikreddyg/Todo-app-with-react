import {createStore,combineReducers} from 'redux';
import taskActions from '../Reducer/taskActions';
const store=(createStore(combineReducers({
    Actions:taskActions,
})))
store.subscribe(()=>{
    console.log('the store data is',store.getState());
})

export default store;