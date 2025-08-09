import './App.css'
import Home from './Pages/Home'
import {Routes, Route , BrowserRouter } from 'react-router-dom';
import AuthPage from './Pages/AuthPage';
import SignupForm from './assets/components/Auth/SignupForm';
import ProductDetails from './assets/components/Product/ProductDetails';
import AllProducts from './assets/components/Product/AllProducts';
import Upcoming from './assets/components/UPCOMING/Upcoming';
import LoginForm from './assets/components/Auth/LoginForm';


function App() {

  return (
    <>
      <div>
        {/* <Home/> */}
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path='/signup' element={<SignupForm/>} />
            <Route path='/api/product/:id' element={<ProductDetails/>} />
            <Route path='/all-products' element={<AllProducts/>} />
            <Route path='/upcoming' element={<Upcoming/>} />
         </Routes>

    </div>
    </>
  )
}

export default App
