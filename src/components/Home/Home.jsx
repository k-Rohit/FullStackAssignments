import React from 'react'
import sitImage from '../../assets/sit.jpg';
import './Home.css'

function Home() {
  return (
    <>
      <div className='hero-section'>
        <div className='hero-image'>
          <img src={sitImage} alt="Logo" style={{ width: '450px', height: '450px', marginTop: '10px', borderRadius : '50%' }} />
        </div>
        <div className="text-section">
          <div>
            <h1 className='heading'>
              WHY SIT ?
            </h1>
          </div>
          <div className='info'>
            Symbiosis Institute of Technology, a constituent of Symbiosis International (Deemed University), ranking among the private engineering colleges in Pune, was established in the year 2008 and currently offers B.Tech programmes in Civil, Computer Science Engineering, Electronics & Telecommunication, Mechanical Engineering, Robotics & Automation and Artificial Intelligence & Machine Learning. Being one of thebest engineering college in Pune, SIT helps students learn more via conclaves, seminars and regular academic sessions.
          </div>
        </div>
      </div>

    </>

  )
}

export default Home