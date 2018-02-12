import React from 'react';
import Form from '../components/Form';
import Home from './Home';
class Edit extends React.Component{
  render(){
  return(
    <div>

    this is Edit page for id {this.props.match.params.id} 
    <Form Submit={this.Submit}/>
    <button>delete</button>
    </div>
  );
}
}
export default Edit;