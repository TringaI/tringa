import React from 'react'
import '../Home.scss'

function Work() {
    return (

        <div className='w-[80%] mt-20'>
            <h1 className="headings codec">work experiences</h1>
            <hr />
           <div className="grid grid-cols-12 lg:gap-5 mt-5">
            <div className=" col-span-12 lg:col-span-4 work-containers flex flex-col mt-5 ">
                <h2 className='text-white codec text-[20px]'><b>Web Developer</b> <b className='color-pink'>(Internship)</b></h2>
                <h3 className='text-white codec text-[16px] mt-2'>Maro Agency <b className="composebold color-pink">2021</b></h3>
                <p className='text-white text-[16px] codec mt-5'>Developed websites using html, css, js and wordpress.</p>
            </div>

            <div className=" col-span-12 lg:col-span-4 work-containers flex flex-col mt-5">
                <h2 className='text-white codec text-[20px]'><b>Teaching Assistant</b> <b className='color-pink'>(Part-time)</b></h2>
                <h3 className='text-white codec text-[16px] mt-2'>Jcoders Academy <b className="composebold color-pink">2022</b></h3>
                <p className='text-white text-[16px] codec mt-5'>AAssisted in teaching programming, from beginner platforms like Scratch 
                    to advanced backend languages such as Node.js and Python.
                </p>
            </div>

            <div className=" col-span-12 lg:col-span-4 work-containers flex flex-col mt-5">
                <h2 className='text-white codec text-[20px]'><b>Software Developer</b> <b className='color-pink'>(Full-time)</b></h2>
                <h3 className='text-white codec text-[16px] mt-2'>Sidora Agency <b className="composebold color-pink">2023</b></h3>
                <p className='text-white text-[16px] codec mt-5'>Developed websites using Vue.js</p>
            </div>
           </div>
        </div>

    )
}

export default Work