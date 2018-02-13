import React from 'react';
import Form from '../components/Form';
import Extras from '../components/Extra';
import Home from './Home';

class Edit extends React.Component {

  constructor(props){
    super(props)
    this.state={
      task: Extras.findById(this.props.match.params.id)
    }
  }

  Submit = (e) => {
    var item={
      id:this.state.task.id,
      task:e
    };
    this.setState((prevState) => ({task: Extras.editData(item)}))   
  }

  render() {
    console.log(this.state.task)
    return (
      <div>
        <Form option={this.state.task.task} Submit={this.Submit} />
      </div>
    );
  }
}
export default Edit;
