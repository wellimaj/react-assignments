import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const Appointmentdata={
  name:'Alan Ford',
  eid:'00005152',
  time:"9:00 (24-05-2016)",
  email:"alan.form@email.nl",
  phone:"+3112346587",
}
const appointmentstatus={
  status:'In Progress',
  Door:'Mark',
  time:'10:30 (25-05-2016)'
}
const customerinfo = {
  profilepicture: 'https://www.w3schools.com/howto/img_avatar.png',
  name:"john Doe",
  designation:"lorem ipsum"
};
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
