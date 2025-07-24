import './App.css'
import Home from './Pages/Home'
import {Routes, Route , BrowserRouter } from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup';

function App() {

  return (
    <>
      <div>
        {/* <Home/> */}
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginSignup />} />
         </Routes>
      </div>
    </>
  )
}

export default App
