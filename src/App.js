import './App.css';
import Login from './login';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./home"

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element= {<Login/>}/>
    <Route path='/home' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
