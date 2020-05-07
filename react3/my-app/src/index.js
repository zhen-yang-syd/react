import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root1')
// );
// //render list
// const superheroList =['a','b','c','d']
// function List({superheros}){
//   return(
//     <div>
//       {superheros.map(hero=>{
//         return <h1 key={hero}>{hero}</h1>
//       })}
//     </div>
//   )
// };
// ReactDOM.render(
//   <List superheros={superheroList} />,
//   document.getElementById('root2')
// );


// ReactDOM.render(
//   <App />,
//   document.getElementById('root3')
// );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
