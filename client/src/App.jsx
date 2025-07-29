import './App.css'
import Home from './Pages/Home'
import {Routes, Route , BrowserRouter } from 'react-router-dom';
import AuthPage from './Pages/AuthPage';
import SignupForm from './assets/components/Auth/SignupForm';

function App() {

  return (
    <>
      <div>
        {/* <Home/> */}
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path='/signup' element={<SignupForm/>} />
         </Routes>
      </div>
    </>
  )
}

export default App
