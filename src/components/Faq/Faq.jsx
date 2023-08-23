import React from 'react'
import './faq.css'
import { useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
const Faq = () => {
    const [faqs,setFaqs] = useState([
        {
            id:1,
            active:true,
            question:'What is IRA and how does it work?',
            answer:"An individual retirement account (IRA) allows you to save and invest money for your retirement with tax advantages. A Roth IRA offers tax-free growth potential on after-tax contributions. For a traditional IRA, your investments have the opportunity to grow tax-deferred with before-tax and after-tax contributions.Each year the IRS sets a maximum amount that you can contribute across all of your IRAs, including those outside of Multichainfinance. For 2023, the contribution limit is $6,500 for people under age 50, and $7,500 for people age 50 and over. You can either make a new IRA contribution that counts towards your annual limit or rollover funds from another retirement account to reinvest.",
        },
        {
            id:2,
            active:false,
            question:'where does the investment go into?',
            answer:"Multichainfinance reinvests the funds generated from this platform, into real estate, gold stock investment, agro-tech industries and oil exploration industries around the world. these industries generate enough revenue to constantly satisfy the client's returns, and keep the company running",
        },
        {
            id:3,
            active:false,
            question:'What are the advantages of joining this platform?',
            answer:'Your account will be managed by a professional financial manager. We monitor the financial markets every day and regularly review your portfolio to ensure that an optimal blend of investments is being used to meet your individual goals. This provides our clients with many benefits, including more time to pursue what really interests them.',
        },
        {
            id:4,
            active:false,
            question:'how do i withdraw my profit?',
            answer:'its as easy as you can possibly imagine, you just have to go to the withdrawal page. select your withdrawal method, enter amount to withdraw, then paste your wallet address and submit. then wait for like 30 minutes after placing withdrawal order and there you go, your wallet address will be credited.',
        },
        {
            id:5,
            active:false,
            question:'What cryptocurrencies can I use?',
            answer:'Multichainfinance supports at least 3 crypto currencies for transactions which include BTC, USDT, ETHEREUM. We plan on supporting more crypto currencies in the near future.',
        },
    ])

    const dropDown = (id)=>{
        setFaqs(
        faqs.map(faq => faq.id === id ? {...faq, active:!faq.active} : {...faq, active:false}))
        console.log(faqs)
    }
  return (
    <div className='faq-section' id='faq'>
        <div className="faq-wrapper">
            <div className="why-choose-us-text-container faq-p">
                <div className="header" data-aos="fade-up">
                    <span className="header-line"></span>
                    <h2>faq</h2>
                </div>
                <h1 data-aos="fade-up">frequently asked questions</h1>
                <p data-aos="fade-up">
                We’ve provided some information about Multichainfinance, Multichainfinance Plans, cryptocurrencies, and few other common questions you might want to ask. If you have any other questions, contact our live support system or email address.
                </p>
            </div>
        </div>
        <div className="faq-container">
            {
                faqs.map(faq =>
                    <div className="faq-card" key={faq.id} data-aos="fade-up">
                        <div className="question-tab">
                            <h2>{`${faq.question}`}</h2>
                            <span className={`dropdown-btn ${faq.active && 'rotate'}`} onClick={()=>{
                                dropDown(faq.id)
                            }}>
                                <AiOutlinePlus />
                            </span>
                        </div>
                        
                        <div className={`answer-tab ${faq.active && 'drop'}`}>
                            <p>{faq.answer}</p>
                        </div>  
                        
                    </div>
                )
            }
        </div>

    </div>
  )
}

export default Faq