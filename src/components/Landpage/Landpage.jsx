import React from 'react'
import './landpage.css'
import Header from '../Header/Header'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade,Autoplay } from "swiper";
const Landpage = () => {
    const navigate= useNavigate()
    return (
    <>
    <Header />
      <Swiper
        spaceBetween={60}
        effect={"fade"}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade,Autoplay]}
        className="Swiper"
        >
    <main className='landpage'>
    <SwiperSlide className='swiper-slide1 swipe'>
        <div className='landpage-content-wrapper'>
            <motion.div className="landpage-text-container" 
            >
                <motion.h1
                    initial={{h:-65, opacity:0}}
                    animate={{h:0, opacity:1}}
                    transition={{duration:0.65,delay:0.2}}
                >
                    Experience a new level of retirement planning with <span className='emphasy'>Multi Chain Finance's </span> diversified approach.
                </motion.h1>
                <motion.p
                    initial={{h:-65, opacity:0}}
                    animate={{h:0, opacity:1}}
                    transition={{duration:0.65,delay:0.4}}
                >
                     Trust us to navigate the complexities of the investment market, while you sit back and watch your wealth flourish. It's time to unlock your financial potential and embark on a prosperous journey with us.
                </motion.p>
                <motion.button className='launch-btn'
                    initial={{h:-65, opacity:0}}
                    animate={{h:0, opacity:1}}
                    transition={{duration:0.65,delay:0.6}}
                    onClick={()=>{
                        navigate('/signup')
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                    </svg>
                    get started
                </motion.button>
            </motion.div>
            <div className="landpage-img-container">
                
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide3 swipe'>
        <div className='landpage-content-wrapper'>
            <motion.div className="landpage-text-container" 
            >
                <motion.h1
                    initial={{h:-65, opacity:0}}
                    animate={{h:0, opacity:1}}
                    transition={{duration:0.65,delay:0.2}}
                >
                    Unlock thriving retirements with <span className='emphasy'>Multi Chain Finance's</span> IRA excellence
                    
                </motion.h1>
                <motion.p
                    initial={{h:-65, opacity:0}}
                    animate={{h:0, opacity:1}}
                    transition={{duration:0.65,delay:0.4}}
                >
                     Trust us to navigate the complexities of the investment market, while you sit back and watch your wealth flourish. It's time to unlock your financial potential and embark on a prosperous journey with us.
                </motion.p>
                <motion.button className='launch-btn'
                    initial={{h:-65, opacity:0}}
                    animate={{h:0, opacity:1}}
                    transition={{duration:0.65,delay:0.6}}
                    onClick={()=>{
                        navigate('/signup')
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                    </svg>
                    get started
                </motion.button>
            </motion.div>
            <div className="landpage-img-container">
                
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide2 swipe'>
        <div className='landpage-content-wrapper'>
            <motion.div className="landpage-text-container" 
            >
                <motion.h1
                    initial={{h:-65, opacity:0}}
                    animate={{h:0, opacity:1}}
                    transition={{duration:0.65,delay:0.2}}
                >
                    Realize riches through <span className='emphasy'>Multi Chain Finance's</span> visionary real estate investment.
                    
                </motion.h1>
                <motion.p
                    initial={{h:-65, opacity:0}}
                    animate={{h:0, opacity:1}}
                    transition={{duration:0.65,delay:0.4}}
                >
                     Trust us to navigate the complexities of the investment market, while you sit back and watch your wealth flourish. It's time to unlock your financial potential and embark on a prosperous journey with us.
                </motion.p>
                <motion.button className='launch-btn'
                    initial={{h:-65, opacity:0}}
                    animate={{h:0, opacity:1}}
                    transition={{duration:0.65,delay:0.6}}
                    onClick={()=>{
                        navigate('/signup')
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                    </svg>
                    get started
                </motion.button>
            </motion.div>
            <div className="landpage-img-container">
                
            </div>
            </div>
        </SwiperSlide>
        
    </main>
    </Swiper>
    </>
  )
}

export default Landpage