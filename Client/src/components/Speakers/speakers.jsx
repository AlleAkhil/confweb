import React, { useEffect, useState } from 'react';
import './speakers.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img4 from '../../assets/4.png'
import { speakers } from './data';
import Aos from 'aos'
import 'aos/dist/aos.css'


const Speakers = () => {

  useEffect(()=>{
    Aos.init({ duration: 200})
  }, [])

  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: img4,
    }));
  };

  return (
    <section className="popular section container" id="speakers">
      <div className="secContainer">
        <div className="secHeader flex">
          <div data-aos="fade-right" data-aos-duration="2500" className="textDiv">
            <h2 className="secTitle">
              Speakers
            </h2>
            <p>
              Tentative Speakers
            </p>
          </div>
        </div>

        <Slider {...settings}>
        {speakers.map((item)=>(
        <div data-aos="fade-up" data-aos-duration="2500" className="mainContent grid">
                <div className="speakers">
                  <div className="spImage">
                    <img
                      src={
                        defaultImage[item.title] === item.title
                          ? defaultImage.linkDefault
                          : item.linkImg
                      }
                      alt={item.title}
                      onError={handleErrorImage}
                    />

                    <div className="overlayInfo">
                      <h3>{item.title}</h3>
                    </div>
                  </div>

                  <div className="spFooter">
                    <div className="number">
                      0{item.id}
                    </div>

                    <div className="spText flex">
                      <h6>
                        {item.category}
                      </h6>
                    </div>
                  </div>
                </div>
        </div>
                ))}
        </Slider>
      </div>
    </section>
  )
}

export default Speakers
