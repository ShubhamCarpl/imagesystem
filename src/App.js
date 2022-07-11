import './App.css';
import Login from './components/login';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/home"
import Header from './components/header';
import Footer from './components/footer';
function App() {
  return (
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element= {<Login/>}/>
    <Route path='/home' element={<Home/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
