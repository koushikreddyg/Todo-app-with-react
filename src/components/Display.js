import React from 'react';
import { Link } from 'react-router-dom';
class Display extends React.Component {
    render() {
        return (
            <div>
                {this.props.options.map((option) => {
                    return (<div key={option.id}>
                        <Link to={`/edit/${option.id}`} ><h4>{option.task}</h4></Link>
                        <button onClick={(e) => { this.props.Remove(option.id) }}>remove</button>
                    </div>)
                })}
            </div>
        )
    }
}
export default Display