import React from 'react';
import {Link} from 'react-router-dom';
class Display extends React.Component{
    render(){
        
        return(
            <div>
            {this.props.options.map((option)=>{
                return (<div key={option}>
                <Link to={`/edit/${option}`} options={this.props.options}><h4>{option}</h4></Link>
                </div>)
            })}
            </div>
        )
    }
}
export default Display