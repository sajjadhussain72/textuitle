
// export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import FormText from './components/FormText';
import About from './components/About';
import Alert from './components/Alert';
// import SlideImg from './components/SlideImg';

function App() {
  const [mode, setMode] = useState('secondary'); // whether the dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  // const removebody=()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-primary')
  // }
  // const toggleMode = (cls) => {
  // removebody()
  // console.log(cls)
    const toggleMode = () => {
    // document.body.classList.add('bg-'+cls)
    if (mode === 'secondary') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
      // setInterval(() => {
      //   document.title = 'Textutils';
      // });
      // setInterval(() => {
      //   document.title = 'Textutils install';
      // });
    } else {
      setMode('secondary');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
    }
  };

  return (
    <Router>
      <Navbar title="TEXTUTILS" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <FormText heading="Enter the text to analyze" mode={mode} showAlert={showAlert} /> */}
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<FormText heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />} />
          <Route path="/about" element={<About mode={mode}  />} />
        </Routes>
      </div>
      {/* <SlideImg /> */}
    </Router>
  );
}

export default App;


