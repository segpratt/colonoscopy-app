// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ColonoscopyResources from "./pages/ColonoscopyResources";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";


function App() {
  return (
    <div className='App'>
    <Router>
      <Routes>
      <Route path='/' element={<><Navbar /><Home /></>} /> 
      <Route path='/login' element= {<Login />} />
      <Route path='/colonoscopyResources' element= {<ColonoscopyResources />} />
      <Route path='/contactUs' element= {<ContactUs />} />
      </Routes>
      <Footer/>

    </Router>
  </div>
  
  );


}

export default App;
