import React from 'react';

class StopWatch extends React.Component{
    constructor(){
        super()
        this.state={
            time : 0,
            isRunning: false,
        }
    }
    handleStart = () => {
        //reset to 0
        this.setState({
            time:0
        })
        this.timer = setInterval(() => {
            this.setState(
                {time:this.state.time+1,
                isRunning: true}
            )
        }, 1);
    }
    handleStop = ()=>{
        clearInterval(
            this.timer
        )
        this.setState(
            {isRunning:false}
        )
    }
    render(){
        return(
            <div>
                {this.state.time}
                <hr></hr>
                <button 
                onClick={this.handleStart} 
                disabled={this.state.isRunning}>start</button>
                <button onClick={this.handleStop}>stop</button>
            </div>
        )
    }
}
export default StopWatch;