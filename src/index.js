import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Forms from './Component/forms';
//import App from './App';
import reportWebVitals from './reportWebVitals';
const fun=['father','mother'];

console.log(fun[0]);
ReactDOM.render(
  <>
  <div>
      <h1  className="heading">Yoga Registration Form</h1>
      <div className="gallery">
      <img src='https://img.freepik.com/free-vector/silhouette-female-yoga-pose-against-mandala-design_1048-13082.jpg?w=740&t=st=1670653697~exp=1670654297~hmac=e155f54bbcb9f0bfcac89acbc22d4a310f90041b6daeec128e010074a26c31a1' alt='logo'/>  
      </div>   
         
   <Forms/>
   </div>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
