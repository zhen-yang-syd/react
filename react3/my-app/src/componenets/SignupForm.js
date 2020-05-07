import React from 'react';
class SignupForm extends React.Component{
    constructor(){
        super()
        this.state={
            username:'',
            password:''
        }
    }
    handleChangeU=(e)=>{
        const username = e.target.value;
        this.setState({
            username
        }
        )
    }
    handleChangeP=(e)=>{
        const password = e.target.value;
        this.setState(
            {
                password
            }
        )
    }
    handleS=(e)=>{
        //禁止刷新页面，防止state丢失
        e.preventDefault();
        //
        console.log(e.target.elements);
        //转换成array
        const value = Array.from(e.target.elements).map(element=>element.value);
        console.log(value)
    }
    //两个handle可以合并写，在input中添加name
    handleChange =(e)=>{
        this.setState(
            {
                [e.target.name]:e.target.value
            }
        )
    }
    render(){
        return(
            <form onSubmit={this.handleS}>
                {JSON.stringify(this.state)}
                <br></br>
                <input type="text" placeholder="username" value={this.state.username} onChange={this.handleChangeU} name ="username"></input>
                <br></br>
                <input type="password" placeholder="password" value={this.state.password} onChange={this.handleChangeP} name = "password"></input>
                <hr></hr>
                <button type="submit">submit</button>
            </form>
        )
    }
}
export default SignupForm;