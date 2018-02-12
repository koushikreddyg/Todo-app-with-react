import React from 'react';
class Forms extends React.Component{
    submit=(e)=>{
        e.preventDefault();
        const option=e.target.elements.search.value;
        this.props.Submit(option)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.submit}>
                <input name="search"/>
                <button>Submit</button>
                </form>
            </div>
        );
    }
}
export default Forms