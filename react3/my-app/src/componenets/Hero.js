import React from 'react';

class Hero extends React.Component{
    constructor(){
        super()
        this.state={
            heros:['a','b','c']
        }
    }
    render(){
        return(
            <ul>
                {this.state.heros.map((item,index)=><li key = {index}>{item}</li>)}
            </ul>
        )
    }
}
export default Hero;