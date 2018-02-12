import React from 'react';
class Display extends React.Component{
    render(){
        return(
            <div>
            {this.props.options.map((option)=>{
                return (<div key={option}>
                <h4>{option}</h4>
                </div>)
            })}
            </div>
        )
    }
}
export default Display