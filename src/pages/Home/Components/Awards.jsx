import React from 'react'
import './Home-Components.scss'

function Awards() {
  return (
    <div className='w-full flex flex-col justify-center items-center mt-40'>
        <h1 className='composebold awards-main-title'>AWARDS & HONORS</h1>
        <div className='w-[80%]' >
            <hr />
            <ul className='flex flex-wrap'>
                <li className='awards-items codec'>Game Development Hackathon - <b className='awards-time composebold'>1st Place</b></li>
                <li className='awards-items codec'>Kosov Sustainable Development Week - GIZ & VentureUP - <b className='awards-time composebold'>2nd Place</b></li>
                <li className='awards-items codec'>Tech Heroes Competition (whole) - <b className='awards-time composebold'>2nd Place</b></li>
                <li className='awards-items codec'>Tech Heroes Competition (design thinking) - <b className='awards-time composebold'>2nd Place</b></li>
                <li className='awards-items codec'>Kosova Makers League (Pristina) - <b className='awards-time composebold'>1st Place</b></li>
                <li className='awards-items codec'>Kosova Makers League (Kosovo) - <b className='awards-time composebold'>7th Place</b></li>
                <li className='awards-items codec'>Chess Competition (Team Competition) - <b className='awards-time composebold'>3rd Place</b></li>
                <li className='awards-items codec'>Golden Student Award - <b className='awards-time composebold'>2X</b></li>
                <li className='awards-items codec'>Debate Compeptition - Mediation Club <b className='awards-time composebold'>3rd Place</b></li>
                <li className='awards-items codec'>Science Fair - Math Divison <b className='awards-time composebold'>2nd Place</b></li>
                <li className='awards-items codec'>Best Programer Girl <b className='awards-time composebold'>1X</b></li>
                <li className='awards-items codec'>November Code Fest <b className='awards-time composebold'>Finalist</b></li>
                <li className='awards-items codec'>Green Debate Competition <b className='awards-time composebold'>Finalist</b></li>
                <li className='awards-items codec'>Kosova Open Debate Competition <b className='awards-time composebold'>Semi-Finalist</b></li>
                <li className='awards-items codec'>Karate Shotokan Medals <b className='awards-time composebold'>13x</b></li>
            </ul>
            <div className="w-full grid grid-cols-12 md:gap-20 mt-10">
                <div className="col-span-12 lg:col-span-6">
                    <img src="/images/awards/techheroes.jpg" alt="" className="awards-images w-full" />
                </div>
                <div className="col-span-12 lg:col-span-6">
                <img src="/images/awards/1.jpg" alt="" className="awards-images w-full" />

                </div>
            </div>
        </div>
    </div>
  )
}

export default Awards