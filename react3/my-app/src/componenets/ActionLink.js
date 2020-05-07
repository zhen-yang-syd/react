import React from 'react';
class ActionLink extends React.Component{
    // constructor(){
    //     super()
    // }
    handleClick =(e)=>{console.log(e); e.preventDefault();}
    render(){
        return(
            <form>
                <button onClick={this.handleClick}> click </button>
            </form>
        )
    }
}
export default ActionLink;