import React, {useEffect} from 'react'
import './tracks.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Tracks = () => {

 useEffect(()=>{
    Aos.init({duration: 2000})
 }, [])


  return(
    <section className='tracks section' id="tracks">
        <div className='secContainer'>
            <h2 className='title'>
                Domains
            </h2>

            <div data-aos="fade-up" data-aos-duration="2500" className="mainContent container">
                <div className="singleItem">
                    <p>
                        Original Contributions from researchers describing their unpublished research work pertaining to IOT, Smart city and Applications of Machine Learning (ML) Techniques to address real-world problems, interdisciplinary research involving machine learning, experimental and/or theoretical studies yielding new insights into the design of expert systems, and manuscripts describing development of new analytical frameworks that advance practical machine learning methods are especially encouraged. The technical program will consist of, but is not limited to, the following topics of interest:
                    </p>

                    <ol>
                        <li>Machine Learning</li>
                        <li>Soft Computing</li>
                        <li>Pattern Recognition</li>
                        <li>Reinforcement Learning</li>
                        <li>Decision support system</li>
                        <li>Cooperative Learning</li>
                        <li>Cooperative Learning</li>
                        <li>Cooperative Learning</li>
                        <li>Cooperative Learning</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Tracks

