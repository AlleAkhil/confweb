import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/about'
import Timeline from './components/Timeline/Timeline'
import Tracks from './components/Tracks/Tracks'
import Speakers from './components/Speakers/speakers'
import Contact from './components/Contact/contact'
import Papers from './components/Papers/Papers'
import Chat from './components/Bot/Chat'
import Footer from './components/Footer/footer'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  return (
      <>
      <Router>
        {/* <Chat/> */}
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/timeline' element={<Timeline/>}/>
          <Route exact path='/speakers' element={<Speakers/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/tracks' element={<Tracks/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='/papers' element={<Papers/>}/>
          <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
        <Footer/>
        
      </Router>
      </>
  )
}

export default App
