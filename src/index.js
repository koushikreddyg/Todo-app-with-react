import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import configurestore from './store/Store/store';
import registerServiceWorker from './registerServiceWorker';
import {firebase,database } from './firebase/firebase';
import {connect} from 'react-redux';
import Router,{history} from './Router/Router';
import setTasksFunction from './store/Actions/setTasks';
import {setUID,removeUID} from './store/Actions/AuthActions'
const store=configurestore();

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      database.ref(`users/${user.uid}/Tasks`).once('value').then((snapshot)=>{
        //console.log('user uid is ',user.uid);
        store.dispatch(setUID(user.uid));
          const array=[];
          snapshot.forEach(element => {
            array.push({
              id:element.key,
              ...element.val()
            })
          });
          store.dispatch(setTasksFunction(array))
      })
      ReactDOM.render(( <Provider store={store}><App /></Provider>), document.getElementById('root'));
      if(history.location.pathname==='/'){
        history.push('/dashboard')
      }
      
    }else{
      store.dispatch(removeUID());
      history.push('/');
      ReactDOM.render(( <Provider store={store}><App /></Provider>), document.getElementById('root'));
    }
  })


registerServiceWorker();
