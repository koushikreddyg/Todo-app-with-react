import React from 'react';
import {Link} from 'react-router-dom';
import { Checkbox } from 'antd';
class DisplayTasks extends React.Component{
     onChange=(e) =>{
        console.log(`checked = ${e.target.checked}`);
      }
    render(){
        return (
            <div>
            {this.props.Tasks.length>0&&(this.props.Tasks.map((Task)=>
            (<div key={Task.id}>
                <h4><Checkbox onChange={this.onChange}><Link to={`/edit/${Task.id}`} >{Task.task} </Link></Checkbox>
                </h4>
            </div>)
                ))}
            
            </div>
        )
    }
}
export default DisplayTasks;




