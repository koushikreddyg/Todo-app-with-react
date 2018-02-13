import React from 'react';
import {Link} from 'react-router-dom';
class Display extends React.Component{
    
    render(){
        
        return(
            <div>
            {this.props.options.map((option)=>{
                return (<div key={option}>
                <Link to={`/edit/${option}`} ><h4>{option}</h4></Link>
                <button onClick={(e)=>{this.props.Remove(option)}}>remove</button>
                </div>)
            })}
            </div>
        )
    }
}
export default Display