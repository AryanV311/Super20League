
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { Cart } from './pages/Cart/Cart'
import { Placeorder } from './pages/placeorder/Placeorder'
// import { Swiperr } from './pages/Swiper/Swiper'
import { Menu } from './pages/Menu/Menu'
import { Home } from './pages/Home/Home'
import { Footer } from './components/Footer/Footer'
import { useState } from 'react'
import { LoginPop } from './components/LoginPop/LoginPop'
// import CardSwiper from './pages/Swiper/CardSwiper'

function App() {
  const [showLogin, setShowLogin] =useState(false)

  return (
    <>
    {showLogin?<LoginPop setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        < Route path='/' element={ < Home />} />
        < Route path='/cart' element={ < Cart />} />
        < Route path='/order' element={ < Placeorder />} />
        <Route path='/menu' element={ < Menu />} />
        <Route path='/cart' element={ < Cart />} />
      </Routes> 
    </div>
    <Footer />
    </>
  )
}

export default App
