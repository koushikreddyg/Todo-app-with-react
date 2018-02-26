import React from 'react';
import Router from './Router/Router';
;
class App extends React.Component {

  render() {
    console.log("my name is",process.env.REACT_APP_NAME)
    
    return (
      <div>
      <Router/>
      
      </div>
    );
  }
}

export default App;
