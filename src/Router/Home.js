import React from 'react';
import Form from '../components/Form';
import Display from '../components/Display';
import Edit from './Edit';
import Extras from '../components/Extra';
class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      options: Extras.getAllData(),
      error: undefined
    }
  }

  searchTaskDups = (value) => {
    return this.state.options.find(obj => obj.task === value);
  }

  Submit = (value) => {
    const realvalue = value.trim();
    if (realvalue.length == 0) {
      this.setState((prevState) => ({
        error: 'please enter some value'
      }))
    } else if (this.searchTaskDups(realvalue)) {
      this.setState((prevState) => ({
        error: 'option is present'
      }))
    } else {
      let taskObj = {
        id: Date.now(),
        task: realvalue
      }
  
      this.setState((prevState) => ({
        error: undefined,
        options: [...prevState.options, Extras.addData(taskObj)]
      }))
    }

  }
  Remove = (id) => {
    this.setState(() => ({
      options:Extras.deleteData(id)
    }))
  }
  // componentDidMount() {
  //   try {
  //     const json = localStorage.getItem('options');
  //     const options = JSON.parse(json);
  //     if (options) {
  //       this.setState((prevState) => ({ options }));
  //     }
  //   }
  //   catch (e) {

  //   }
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.options.length !== this.state.options.length) {
  //     const json1 = JSON.stringify(this.state.options);
  //     localStorage.setItem('options', json1);
  //   }
  // }

  render() {
    console.log(this.props.input)
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <Form Submit={this.Submit} />
        <Display options={this.state.options} Remove={this.Remove} />
      </div>
    )
  }
}


export default Home;