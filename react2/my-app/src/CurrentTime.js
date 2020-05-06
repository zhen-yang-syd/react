import React from 'react'

class CurrentTime extends React.Component{
    constructor(props){
        super(props)
        this.state={
            time : new Date().toLocaleTimeString()
        }
    }
    componentDidMount(){
        this.timer = setInterval(() => {
            this.setState({time:new Date().toLocaleTimeString()})
        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render(){
    return <h1>Hello Jack,Its {this.state.time}</h1>
    }
}
export default CurrentTime;