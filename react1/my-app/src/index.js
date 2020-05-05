import React from 'react';
import ReactDOM, { createPortal, render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <h1>zhen yang</h1> ,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <form style={{display:"flex"}}>
//     <input type="text" name="usrname" placeholder="username" ></input>
//     <input type="password" name="password" placeholder="password"></input>
//css样式
//     <button type="submit" style={{background:"yellow", color:"red"}}>Submit</button>
//   </form>,
//   document.querySelector('#root')
// )

// ReactDOM.render(
// <h1>It is {new Date().toLocaleTimeString()}</h1>,
// document.querySelector('#root')
// )

//functional component
// function Qelcome () {
//   return <h1>hello world</h1>;
// } 
// ReactDOM.render(
//   <Qelcome />,
//   document.querySelector('#root')
// );

//functional components with props
function Welcome(props){
return <h1>Hi,{props.name}</h1>
}
ReactDOM.render(
  <Welcome name="zhen" />,
  document.querySelector('#root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
