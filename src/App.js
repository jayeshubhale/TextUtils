
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');//whether darkmode is enabled or not

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Lite mode has been enabled", "success")

    }
  }

  // ----------------------------------------------

  const [alert, setAlert] = useState(null);

  const showAlert = (messege, type) => {
    setAlert({
      msg: messege,
      type: type
    })
    // setTimeout(()=>
    // {
    //     setAlert('null');
    // },2000);
  }


  return (
    <>

      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      {/* { <Navbar/>} */}
      <Router>
       <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading=" Try TextUtils - Word Counter, Character Counter" mode={mode} />
          </Route>
        </Switch>
        {/* <About/> */}
      </div>
    </Router>



    </>
  );
}
export default App;
