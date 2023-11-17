import React,{ useEffect} from 'react'
import './Timeline.css'
import Time from './time'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Timeline = () => {
 
  useEffect(()=>{
    Aos.init({duration: 2000})
 }, [])
  return (
    <section className="popular section container" id="time">
      <div className='secContainer'>
        <div className="mainContent">
          <div className="speakers line">
            <div className="spText content">
              <span data-aos="fade-up" data-aos-duration="2500" className="content">
                <p>
                <h1>About</h1>
                  In the current COVID-impacted world, new hardware and software that mimic the workings of the human brain and aid in human decision-making, widely referred to as cognitive computing," are playing a vital role in the fight against this pandemic. With this technology, unstructured input, such as images or natural expression, can be adapted and made sense of by a cognitive computing device. This makes it ideal for recognizing, understanding, and interpreting patterns, as well as giving them meaning. Intelligent computing systems employ computational methodologies that imitate nature-inspired processes to solve high-complexity real-world problems for which exact mathematical solutions based on physical and statistical modeling are intractable. Common intelligent computational methodologies are presented, including artificial neural networks, deep learning, reinforcement learning, evolutionary computation, genetic algorithms, artificial immune systems, fuzzy logic, swarm intelligence, artificial life, virtual worlds, and hybrid methodologies based on combinations of the previous.
                  This International Conference, ICCIC-2023, on Cognitive and Intelligent Computing is a forum for scientists, researchers, and civic bodies to discuss and exchange experimental or theoretical results, novel designs, work-in-progress, experiences, case studies, and trend-setting ideas in the area of smart cities, intelligent computing, cognition, cyber-physical systems, and related areas. Papers with new research results and new products or concepts are encouraged for submission.
                </p>
              </span>
              <span className="flex" style={{textAlign:'center'}}>
                <div>
                  <h1>Timeline</h1>
                  <Time/>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

)
}

export default Timeline
