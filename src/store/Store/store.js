import {createStore,combineReducers} from 'redux';
import taskActions from '../Reducer/taskActions';
export default()=>{
    const store=(createStore(combineReducers({
        Actions:taskActions,
        
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  

)


)
return store
}
