import './App.css'
import Home from './Pages/Home'
import {Routes, Route , BrowserRouter } from 'react-router-dom';
import AuthPage from './Pages/AuthPage';
import SignupForm from './assets/components/Auth/SignupForm';
import ProductDetails from './assets/components/Product/ProductDetails';

function App() {

  return (
    <>
      <div>
        {/* <Home/> */}
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path='/signup' element={<SignupForm/>} />
            <Route path='/api/product/:id' element={<ProductDetails/>} />
         </Routes>
      </div>
    </>
  )
}

export default App
