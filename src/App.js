import logo from './logo.svg';
import './App.css';
import {useState} from "react";
function App() {
  const[name,setName]=useState("");
  const [darkMode,setDarkMode]=useState(false);

  return (
    <div className={darkMode?"container dark":"container"}>
  <h1>Welcome to Student Dashboard!!!</h1>
  <input type="text" placeholder="Enter your name"
  className="name-input"
  value={name}
  onChange={(e) => setName(e.target.value)}
  ></input>
  <p>Hello, {name}</p>
  <button className="toggle-btn"onClick ={()=> setDarkMode(!darkMode)}>
  {darkMode ? "Switch to Light Mode":"Switch to Dark Mode"}
  </button>
 

  </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
