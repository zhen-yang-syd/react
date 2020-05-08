import React from 'react';
import ReactDom from 'react-dom';
import './Status.css';

const Online = ()=><h1>Online</h1>
const Offline= ()=><h1>Offline</h1>

//button
//()不用加return，如果用{}要加上return
const Button = (props)=>(
    <button className={`btn btn-${props.type}`}>
        {/* {props.lable} */}
        {/* children是个array */}
        {props.children[0]}
    </button>
)
//option1 
// const Status = ({isOnline})=>{
//     if(isOnline){
//         return <Online/>
//     }
//     else{
//         return <Offline/>
//     }
// }

//option2
// const Status = ({isOnline})=>{
// return isOnline ? <Online/> : <Offline/>;
// }

//option3
const Status = ({isOnline})=>{
    return <div>
        {isOnline && <Online/>}
        {!isOnline && <Offline/>}
        {/* option1 */}
        {/* <Button type="primary" lable = "button"/> */}
        <br></br>
        {/* option2,children调用 */}
        <Button type="primary" lable={<h2>button</h2>}>
            <h1>hello</h1>
            <h2>hello</h2>
        </Button>
    </div>
}


export default Status;
