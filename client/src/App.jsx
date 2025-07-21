import './App.css'
import Home from './Pages/Home'
import {Routes, Route , BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <>
      <div>
        {/* <Home/> */}
         <Routes>
            <Route path="/" element={<Home />} />
         </Routes>
      </div>
    </>
  )
}

export default App
