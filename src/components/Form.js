import React from 'react';
class Forms extends React.Component{
    constructor(props){
        super(props);
        this.state={
            option:props.option?props.option: ''
        }
    }
    change=(e)=>{
        e.preventDefault();
        const option= e.target.value;
        this.setState(()=>({
            option
        }))
    }
    submit=(e)=>{
        e.preventDefault();
        this.props.Submit(this.state.option)
        this.setState(()=>({
            option:''
        }))
    }

    render(){
        return(
            <div>
                <form onSubmit={this.submit}>
                <input value={this.state.option} name='input' onChange={this.change}/>
                <button>Submit</button>
                </form>
            </div>
        );
    }
}
export default Forms