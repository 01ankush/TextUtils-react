// import logo from './logo.svg';

// import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


// import './App.css';
function App() {
  const [mode, setMode] = useState('light');// Wheather dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#04233c';
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'TextUtils - Dark Mode';
      // setInterval(()=>{
      //   document.title = 'TextUtils is Amazing';
      // },2000);
      // setInterval(()=>{
      //   document.title = 'Install TextUtils Now';
      // },1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = 'TextUtils - Light Mode';



    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert}></Alert>
        {/* <Navbar ></Navbar> */}
        <div className="container my-3" >
          {/* <Switch> */}
            {/* <Route exact path="/about">
              <About mode={mode} /> */}
            {/* </Route> */}
            {/* <Route exact path="/"> */}
              <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}></TextForm>
             {/* </Route> */}
          {/* </Switch>  */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
