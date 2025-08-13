import './App.css'
import Home from './Pages/Home'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import SignupForm from './assets/components/Auth/SignupForm';
import ProductDetails from './assets/components/Product/ProductDetails';
import AllProducts from './assets/components/Product/AllProducts';
import Upcoming from './assets/components/upcoming/Upcoming';
import LoginForm from './assets/components/Auth/LoginForm';
import RefreshHandler from './refreshHandler';
import { useState } from 'react';
import Profile from './Pages/Profile';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  
  const navigate = useNavigate();

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <>
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/" element={<Home/>} />
        <Route path="/api/product/:id" element={<ProductDetails />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path='/profile' element={<PrivateRoute element={<Profile/>}/>}/>
      </Routes>
    </>
  );
}

export default App;
