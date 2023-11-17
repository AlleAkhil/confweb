import React, {useState} from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import Aos from 'aos'
import 'aos/dist/aos.css'
import './counter.css'

const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
      <section className="popular section container" id="stats">
      <div className="secContainer">

        <div data-aos="fade-up" data-aos-duration="2500" className="mainContent">
                <div className="speakers">
                  <div className="spFooter">
                    <div className="spText flex">
                      <span className="flex">
                        {counterOn && <CountUp start={0} end={100} duration={2} delay={0}/>}
                      </span>
                      <span className="flex">
                        {counterOn && <CountUp start={0} end={100} duration={2} delay={0}/>}
                      </span>
                      <span className="flex">
                        {counterOn && <CountUp start={0} end={100} duration={2} delay={0}/>}
                      </span>
                      <span className="flex">
                        {counterOn && <CountUp start={0} end={100} duration={2} delay={0}/>}
                      </span>
                    </div>
                  </div>
                </div>
                </div>
      </div>
      </section>
    </ScrollTrigger>
  )
}

export default Counter
