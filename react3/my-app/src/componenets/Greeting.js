import React from 'react';

class Greeting extends React.Component{
    // constructor(){
    //     super()
    // }
    handleGreeting =()=>alert('welcome');
    render(){
        return (<button onClick={this.handleGreeting}>There is the button</button>)
    }

}
export default Greeting;