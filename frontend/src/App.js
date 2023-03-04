// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ColonoscopyResources from "./pages/ColonoscopyResources";
import Feedback from "./pages/Feedback";
import PreColDietInfo from "./pages/PreColDietInfo";
import ContactUs from "./pages/ContactUs";
import Faq from "./pages/Faq";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/coloncancerinfo' element = {<><Navbar /><ColonCancerInfo/></>}/>
          <Route
            path="/colonoscopyResources"
            element={<ColonoscopyResources />}
          />
          <Route path="/patient-feedback" element={<Feedback />} />
          <Route path="/pre-colonoscopy-diet" element={<PreColDietInfo />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
