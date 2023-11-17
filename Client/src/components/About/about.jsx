import React, {useEffect} from 'react'
import './about.css'

import img from '../../assets/test.png';

import video from '../../assets/video.mp4';

import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {

 useEffect(()=>{
    Aos.init({duration: 2000})
 }, [])


  return(
    <section className='about section' id="about">
        <div className='secContainer'>
            <h2 className='title'>
                Why US.?
            </h2>

            <div data-aos="fade-up" data-aos-duration="2500" className="mainContent container grid">
                <div className="singleItem">
                    <img src={img} alt="Image Name" />

                    <h3>100+ Conferences</h3>

                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit, obcaecati laudantium expedita ullam atque nisi unde fuga architecto maxime eos quidem eum perferendis rem nostrum repudiandae non iste sapiente!
                    </p>
                </div>

                <div className="singleItem">
                    <img src={img} alt="Image Name" />

                    <h3>100+ Conferences</h3>

                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit, obcaecati laudantium expedita ullam atque nisi unde fuga architecto maxime eos quidem eum perferendis rem nostrum repudiandae non iste sapiente!
                    </p>
                </div>

                <div className="singleItem">
                    <img src={img} alt="Image Name" />

                    <h3>100+ Conferences</h3>

                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit, obcaecati laudantium expedita ullam atque nisi unde fuga architecto maxime eos quidem eum perferendis rem nostrum repudiandae non iste sapiente!
                    </p>
                </div>
            </div>

            <div className="videoCard container">
                <div data-aos="fade-right" data-aos-duration="2500" className="cardContent grid">
            
                    <div className="cardText">
                        <h2>Test</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea optio voluptates architecto quo ut ex. Provident reprehenderit dolore perferendis ab dicta necessitatibus alias? Sit voluptas excepturi vero error, in deserunt!</p>
                    </div>

                    <div data-aos="fade-left" data-aos-duration="2500" className="cardVideo">
                        <video src={video} autoPlay loop muted type="video/"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}

export default About

