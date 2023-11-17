import React,{useEffect} from 'react'
import './home.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import About from '../About/about'
import Timeline from '../Timeline/Timeline'
import Speakers from '../Speakers/speakers'
import { HashLink as Link } from 'react-router-hash-link'
const Home = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <>
    <section className="home">
      <div className="secContainer container">
        <div className="homeText">
          <h1 data-aos="fade-up" data-aos-duration="2000" className="title">
          3rd International Conference on Cognitive & Intelligent Computing
          </h1>

          <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
          (ICCIC-2023) 8-9 December 2023
          </p>

          <button data-aos="fade-up" data-aos-duration="3000" className="btn">
            <Link to='/papers' className="navLink">
              Submit Papers
            </Link>
          </button>
        </div>
      </div>
    </section>
    <Timeline/>
    <Speakers/>
    <About/>
    </>
  )
}

export default Home
