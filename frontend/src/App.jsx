import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Collections from './pages/Collections'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Home/Navbar/Navbar'
import HandicraftItems from './pages/HandicraftItems'
import WaterFountains from './pages/WaterFountains'
import BuddhaIdols from './pages/BuddhaIdols'
import PendulumClocks from './pages/PendulumClocks'
import WallHangings from './pages/WallHangings'
import CoupleStatues from './pages/CoupleStatues'
import BuddhaPaintings from './pages/BuddhaPaintings'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Products from './pages/Products'
  import { ToastContainer} from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";




const App = () => {
  return (
    <>
  <Navbar/>
  <ToastContainer/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/collections' element={<Collections/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/products/:id' element={<Products/>}/>

       {/* Category Routes */}
        <Route path="/handicraft-items" element={<HandicraftItems />} />
        <Route path="/water-fountains" element={<WaterFountains />} />
        <Route path="/buddha-idols" element={<BuddhaIdols />} />
        <Route path="/pendulum-clocks" element={<PendulumClocks />} />
        <Route path="/wall-hangings" element={<WallHangings />} />
        <Route path="/couple-statues" element={<CoupleStatues />} />
        <Route path="/buddha-paintings" element={<BuddhaPaintings />} />
    </Routes>
    </>
  )
}

export default App