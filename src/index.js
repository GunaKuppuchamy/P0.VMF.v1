import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import ColorSchemesExample from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; 
// import ResponsiveAppBar from './components/Navbar';
// import ButtonAppBar from './components/Navigation';
import {BrowserRouter} from 'react-router-dom'
// import SignIn from './components/Getin';
// import App from './App';
// import SignInSide from './components/Getin';
import App from './App';
import ANavbar1 from './Agent/ANavbar1';
import Aupdate from './Agent/Aupdate';
import App1 from './App1';
import BasicDatePicker from './Agent/Acomponents/Date';
// import Tests from './components/Tests';
// import SignInSide from './components/Getin';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
      <App/>
      {/* <ANavbar1/> */}
      {/* <Aupdate/> */}
      {/* <App1/> */}
      {/* <BasicDatePicker/> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
