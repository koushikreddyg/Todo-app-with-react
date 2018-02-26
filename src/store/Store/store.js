import {createStore,combineReducers,compose,applyMiddleware} from 'redux';
import taskActions from '../Reducer/taskActions';
import Authreducers from '../Reducer/AuthReducer';
import thunk from 'redux-thunk';
const Composer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose
export default()=>{
    const store=(createStore(combineReducers({
        Actions:taskActions,
        Auth: Authreducers,
    }),
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
    Composer(applyMiddleware(thunk))

)


)
return store

}
