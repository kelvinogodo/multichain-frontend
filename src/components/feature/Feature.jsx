import React from 'react'
import './feature.css'
import {FaStackOverflow} from 'react-icons/fa'
import {IoAnalyticsOutline} from 'react-icons/io5'
import {BsWindowSidebar} from 'react-icons/bs'
import {
    BiSupport
} from 'react-icons/bi'
import {AiOutlineFund} from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Feature = () => {
  return (
    <div className=' feature-section' id='feature'>
        <div className="about-wrapper feature-wrapper">
        <div className="why-choose-us-text-container about-text">
            <div className="header" data-aos="fade-up">
                <span className="header-line"></span>
                <h2>what we do</h2>
            </div>
            <h1 data-aos="fade-up">the following are services we offer</h1>
            <p data-aos="fade-up">
                 Discover an array of exceptional benefits when choosing Multi Chain Finance as your partner in retirement planning:
            </p>
        </div>
        <div className="feature-card-container" data-aos="fade-up">
            <div className="bitcoin-card" data-aos="fade-up">
            <div className="bitcoin-card-text-container">
                <h2>introducing IRA</h2>
                <p>In a world where financial security in retirement takes center stage, Multi Chain Finance emerges as a beacon of success. Through its innovative approach to managing Individual Retirement Account (IRA) accounts, Multi Chain Finance not only safeguards your retirement dreams but also amplifies your potential for profits through strategic investments. In this article, we delve into the depths of IRA, revealing how Multi Chain Finance leverages its expertise to maximize returns, making retirement a prosperous journey.
                </p>
                <Link to="/IRA">
                 <button class="launch-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                    </svg>
                    read more
                </button>
                </Link>
            </div>
            <img src="/pexels-mikhail-nilov-7734569.jpg" alt="" className='bitcoin-img'/>
            </div>
            <div className="bitcoin-card flipped" data-aos="fade-up">
            <div className="bitcoin-card-text-container">
                <h2>real estate investment</h2>
                <p>In the realm of financial prosperity, Multi Chain Finance reigns supreme as a visionary company that transforms retirement dreams into thriving realities. Beyond its prowess in managing Individual Retirement Account (IRA) accounts, Multi Chain Finance leverages strategic real estate investments to fuel a perpetual cycle of profit generation. In this article, we explore how Multi Chain Finance harnesses the power of real estate to amplify IRA profits, making dreams of abundant retirement wealth a tangible and fulfilling journey.</p>
                <Link to="/realestate">
                <button class="launch-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                    </svg>
                    read more
                </button>
                </Link>
            </div>
            <img src="/real2.png" alt="" className='bitcoin-img'/>
            </div>
            <div className="bitcoin-card" data-aos="fade-up">
            <div className="bitcoin-card-text-container">
                <h2>crypto investment</h2>
                <p>In the realm of financial prosperity, Multi Chain Finance stands as an embodiment of innovation, transforming retirement dreams into prosperous realities. Beyond its mastery in managing Individual Retirement Account (IRA) accounts, Multi Chain Finance harnesses the power of strategic investments in cryptocurrencies and forex markets to amplify profits for its clients. In this article, we explore how Multi Chain Finance's adept navigation of crypto and forex investments fuels a continuous cycle of profit generation, making the vision of substantial retirement wealth a vivid and attainable reality.</p>
                <Link to="/crypto">
                <button class="launch-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
                    </svg>
                    read more
                </button>
                </Link>
            </div>
            <img src="/mockup.jpg" alt="" className='bitcoin-img'/>
            </div>
        </div>
    </div>
</div>
  )
}

export default Feature