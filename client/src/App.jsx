import './App.css'
import Home from './Pages/Home'
import {Routes, Route , BrowserRouter } from 'react-router-dom';
import AuthPage from './Pages/AuthPage';

function App() {

  return (
    <>
      <div>
        {/* <Home/> */}
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<AuthPage />} />
         </Routes>
      </div>
    </>
  )
}

export default App
