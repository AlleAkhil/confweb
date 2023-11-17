import React,{useState} from 'react'
import './navbar.css'
import logo from '../../assets/logo.png' 
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import { HashLink as Link } from 'react-router-hash-link'

const Navbar = () => {

  const [active,setActive] = useState('navBar')
  const showNav = ()=>{
    setActive('navBar activeNavbar')
  }

  const removeNav = ()=>{
    setActive('navBar')
  }

  const [transparent,setTransparent] = useState('header')
  const addBg = () => {
    if(window.scrollY >= 10){
    setTransparent('header activeHeader')
    }else{
      setTransparent('header')
    }
  }
  window.addEventListener('scroll', addBg)  

  return (
    <section className="navBarSection">
      <div className={transparent}>
        <div className="logoDiv">
          <a href="/" className="logo">
            <img style={{height:'5rem'}} src={logo} alt="CBIT" />
          </a>
        </div>
        
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <Link to='/timeline' className="navLink">
                Timeline
              </Link>
            </li>

            <li className="navItem">
              <Link to='/speakers' className="navLink">
                Speakers
              </Link>
            </li>

            <li className="navItem">
              <Link to='/about' className="navLink">
                About us
              </Link>
            </li>

            
            <li className="navItem">
              <Link to='/tracks' className="navLink">
                Tracks
              </Link>
            </li>

            <li className="navItem">
             <Link to='/contact' className="navLink">
                Contact us
              </Link>
            </li>

            <div className="headerBtns flex">
              <button className="btn loginBtn">
              <Link to='/papers' className="navLink">
                Submit Papers
              </Link>
              </button>
            </div>

          </ul>

          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon"/>
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon"/>
        </div>
      </div>
    </section>
  )
}

export default Navbar
