import React from 'react'
import { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
    
const IRA = () => {
    const navigate = useNavigate()
    const [withdrawMethods,setWithdrawalMethods] = useState([
      {
        id:1,
        min:'25,000',
        max:'40,000',
        image:'/btc.png',
        method:'BTC',
        type:'IRA regular',
        percent:'45%',
        duration:'3 months'
      },
      {
        id:2,
        min:'45,000',
        max:'75,000',
        image:'/bnb.png',
        method:'USDT',
        type:'IRA standard',
        percent:'70',
        duration:'6 months'
      },
      {
        id:3,
        min:'80,000',
        max:'1,000,000',
        image:'/tron.png',
        method:'tether(TRC20)',
        type:'IRA mega',
        percent:'90',
        duration:'yearly'
      }
      ])
  return (
    <div className='plan-section'>
              <div className="why-choose-us-text-container">
                  <div className="header" data-aos="fade-up">
                      <span className="header-line"></span>
                      <h2>Eclusive IRA plans</h2>
                  </div>
                  <h1 data-aos="fade-up">choose an IRA investment plan</h1>
                  <p data-aos="fade-up">choose an IRA investment plan that suits your budget</p>
              </div>
              <div className="plan-card-container">
              {
            withdrawMethods.map((withdrawmethod) => (
              <div class="pack-container" key={withdrawmethod.id} data-aos="fade-up">
            <div class="pack-header">
              <p class="title">
                {withdrawmethod.type}
              </p>
              <div class="price-container">
                {withdrawmethod.percent}
                <span>%</span>
              </div>
            </div>
            <div>
              <ul class="lists">
                <li class="list">
                  <span>
                    <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
                    </svg>
                  </span>
                  <p>
                    Instant withdrawal
                  </p>
                </li>
                <li class="list">
                  <span>
                    <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
                    </svg>
                  </span>
                  <p>
                    {withdrawmethod.duration} duration
                  </p>
                </li>
                <li class="list">
                  <span>
                    <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
                    </svg>
                  </span>
                  <p>
                     referral commission - 10%
                  </p>
                </li>
                <li class="list">
                  <span>
                    <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
                    </svg>
                  </span>
                  <p>
                    minimum deposit - ${withdrawmethod.min}
                  </p>
                </li>
                <li class="list">
                  <span>
                    <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
                    </svg>
                  </span>
                  <p>
                    maximum deposit - ${withdrawmethod.max}
                  </p>
                </li>
              </ul>
            </div>
                <div class="buttons-container" onClick={navigate('/login')}>
                  <Link to='/login'>
                    <button type="button">
                    Invest Now
                    </button>
                  </Link>
            </div>
          </div>
          ))}
          </div>
        </div>
  )
}

export default IRA