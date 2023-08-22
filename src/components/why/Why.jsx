import React from 'react'
import './why.css'
import {SlGraph} from 'react-icons/sl'
import {FaThinkPeaks} from 'react-icons/fa'
import {SiGraphql} from 'react-icons/si'
const Why = () => {
  return (
    <div className='why-choose-section'>
        <div className="why-choose-us-text-container">
            <div className="header" data-aos="fade-up">
                <span className="header-line"></span>
                <h2>why choose us?</h2>
            </div>
            <h1 data-aos="fade-up">Your Pathway to Unrivaled Retirement Prosperity</h1>
            <p data-aos="fade-up">In a landscape brimming with financial options, Multi Chain Finance stands tall as the definitive choice for IRA management. What sets Multi Chain Finance apart is its pioneering spirit that marries strategic investments in real estate, crypto, and forex markets with the singular goal of maximizing IRA profits. Backed by a proven track record, meticulous market analysis, and a commitment to informed decision-making, Multi Chain Finance offers an unparalleled avenue for turning retirement dreams into a thriving and secure reality.</p>
        </div>
        <div className="why-choose-us-card-container">
            <div className="why-choose-us-card choose-card1" data-aos="fade-up">
                <span className="card-counter">01</span>
                <SlGraph />
                <h2>Strategic Investment Diversity</h2>
                <p>Multi Chain Finance offers a unique fusion of real estate, crypto, and forex investments, diversifying clients' portfolios for optimal returns. This multifaceted approach ensures a resilient strategy to maximize IRA profits.</p>
            </div>
            <div className="why-choose-us-card choose-card2" data-aos="fade-up">
                <span className="card-counter">02</span>
                <FaThinkPeaks />
                <h2>Informed Decision-Making</h2>
                <p>Backed by meticulous market analysis and cutting-edge technologies, Multi Chain Finance makes well-timed investment decisions. This expertise ensures clients benefit from market trends, propelling their retirement dreams forward.</p>
            </div>
            <div className="why-choose-us-card choose-card3" data-aos="fade-up">
                <span className="card-counter">03</span>
                <SiGraphql />
                <h2>Client-Centric Excellence</h2>
                <p>Multi Chain Finance's dedication to tailored investment plans, strategic withdrawal strategies, and continuous growth ensures a personalized experience. Clients benefit from a comprehensive approach that optimizes both their retirement journey and financial prosperity.</p>
            </div>
        </div>
    </div>
  )
}

export default Why