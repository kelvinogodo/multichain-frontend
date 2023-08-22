import React from 'react'
import './about.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade,Autoplay } from "swiper";
import { useNavigate } from 'react-router-dom'
const About = () => {
    const navigate = useNavigate()
  return (
    <div className='about-section' id='about'>
        <div className="about-wrapper">
        <div className="why-choose-us-text-container about-text">
            <div className="header" data-aos="fade-up">
                <span className="header-line"></span>
                <h2>about us</h2>
            </div>
            <h1 data-aos="fade-up">learn more about Multi Chain Finance</h1>
            <p data-aos="fade-up">
                Multi Chain Finance is an online platform that maximizes the slight differences in prices of global forex exchange rate and investment in real estate, crude oil and agriculture to inturn satisfy her clients. We also help to manage and save our client's funds for future use, ready to be withdrawn at any point. <br />
                we have very experienced experts and agents in the above mentioned areas of investment, so be rest assured that your investments are very safe with us.
            </p>
            <button className='launch-btn launch' data-aos="fade-up" onClick={()=>{
                navigate('/about')
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                    </svg>
                    read more
            </button>
        </div>
              <div className="about-img-container">
                  <Swiper
                        spaceBetween={60}
                        effect={"fade"}
                        autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                        }}
                        modules={[EffectFade,Autoplay]}
                  >
                      <SwiperSlide className='swiper-slide1 about-slide'>
                      </SwiperSlide>
                      <SwiperSlide className='swiper-slide2 about-slide'></SwiperSlide>
                      <SwiperSlide className='swiper-slide3 about-slide'></SwiperSlide>
                 </Swiper>
        </div>
        </div>
    </div>
  )
}

export default About