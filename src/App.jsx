import React, { useRef, useState } from 'react'
import Steve from '../src/assets/katana.jpg'
import Katana from '../src/assets/Steve.jpg'
import { BsGithub } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCode } from "react-icons/fa6";
import { FiCommand } from "react-icons/fi";
import { MdCamera } from "react-icons/md";
import { FaImage } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";

function App() {
  const[active, setActive] = useState(false)
  const dropDown = document.querySelector('#dropDown')
  // const navRef = useRef(null)
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const workRef = useRef(null)
  const contactRef = useRef(null)


  function handleDropDown(){
    setActive(true)
    if(active){
      dropDown.style.display = 'block'
      setActive(false)
    }
    else if(!active){
    dropDown.style.display = 'none'
    }
  }

  function scrollToHome(){
    homeRef.current?.scrollIntoView({behaviour: 'smooth'})
  }
  function scrollToAbout(){
    aboutRef.current?.scrollIntoView({behaviour: 'smooth'})
  }
  function scrollToWork(){
    workRef.current?.scrollIntoView({behaviour: 'smooth'})
  }
  function scrollToContact(){
    contactRef.current?.scrollIntoView({behaviour: 'smooth'})
  }
  return (
    <div>
      <section className='flex items-center w-full fixed bg-white top-0 mb-10'>
        <div onClick={scrollToHome} className=' flex items-center justify-center p-2 w-52 mt-5 lg:ml-10'>
          <h1 className='text-3xl -ml-5 '>STEPKAT</h1>
        </div>
        <div className='ml-10 flex-col absolute right-10 top-5 text-right p-2 bg-white'>
          <GiHamburgerMenu onClick={handleDropDown} className='text-3xl text-center ml-20 lg:hidden'/>
          <ul id='dropDown' className='hidden p-2 mt-5 lg:flex lg:items-center lg:gap-10 lg:-mt-3 lg:border-b-white'>
            <li onClick={scrollToHome} className='text-xl hover:cursor-pointer hover:drop-shadow-xl transition-all delay-0 ease-in-out border-b-2 border-b-gray-400 border-b-solid'>
              Home
            </li>
            <li onClick={scrollToAbout} className='text-xl hover:cursor-pointer hover:drop-shadow-xl transition-all delay-0 ease-in-out border-b-2 border-b-gray-400 border-b-solid'>
              My Story
            </li>
            <li onClick={scrollToWork} className='text-xl hover:cursor-pointer hover:drop-shadow-xl transition-all delay-0 ease-in-out border-b-2 border-b-gray-400 border-b-solid'>
              My Work
            </li>
            <li onClick={scrollToContact} className='text-xl hover:cursor-pointer hover:drop-shadow-xl transition-all delay-0 ease-in-out border-b-2 border-b-gray-400 border-b-solid'>
              Contact Me
            </li>
          </ul>
        </div>
      </section>
      <section  ref={homeRef} className='mt-20'>
        <div className='flex items-center justify-center mt-10 '>
          <img src={Steve} alt="Image not found" className='w-60 h-60 rounded-full border-9 border-black border-solid lg:w-72 lg:h-72'/>
        </div>
        <div className='p-5 flex items-center justify-center'>
          <div className='flex items-center mt-10'>
            <h2 className='flex items-center p-2 text-xl lg:text-4xl'>
              Create
              <FaCode className='ml-3 text-xl lg:text-3xl'/>
            </h2>
            <span className='text-4xl -mt-5 font-bold'>.</span>
            <h2 className='flex items-center p-2 text-xl lg:text-4xl'>
              Capture
              <MdCamera className='ml-3 text-xl lg:text-3xl'/>
            </h2>
            <span className='text-4xl -mt-5 font-bold'>.</span>
            <h2 className='flex items-center p-2 text-xl lg:text-4xl'>
              Inspire
              <FiCommand className='ml-3 text-xl lg:text-3xl'/>
            </h2>
          </div>
        </div>      
        <div className='flex items-center justify-center p-3 mt-10'>
          <button onClick={scrollToWork} className='bg-black p-4 rounded-full text-white font-bold'>See my work</button>
        </div>
      </section>

      <section ref={aboutRef} className='bg-gray-300 h-auto1 p-7 rounded-whoop mt-10'>
        <div className='flex items-center justify-center mb-5'>
          <h1 className='font-semibold text-3xl lg:text-4xl'>My Story</h1>
        </div>
        <div className='lg:flex items-center justify-center'>
          <div className='flex items-center justify-center lg:-ml-34 lg:mr-10'>
            <img src={Katana} alt="Image not found" className='rounded-md w-72 h-72 lg:w-sp lg:h-sp'/>
          </div>
          <div className='lg:ml-52 lg:mt-5'>
            <div className='flex items-center justify-center mt-10'>
              <div>
                <div className='flex items-center justify-center'>
                  <spa className='lg:text-xl'>Hi,</spa>
                  <span className='ml-1 lg:text-xl'>my name is...</span>
                </div>
                <h2 className='font-semibold text-2xl italic lg:text-3xl'>Stephen Katana</h2>
              </div>
            </div>
            <div className='w-full text-center mt-3  mb-5 lg:w-96'>
              <p className='lg:text-2xl'>A passionate photographer with a keen eye for capturing moments and telling stories through stunning visuals. Also a skilled web developer, combining creativity with technical expertise to craft visually engaging and user-friendly websites. Dedicated to bringing ideas to life both behind the lens and on the screen.</p>
            </div>
          </div>
        </div>
      </section>

      <section  ref={workRef}className='flex items-center justify-center mt-10 w-full'>
        <div>
          <div className='flex items-center justify-center mb-5'>
            <h1 className='font-semibold text-3xl lg:text-4xl'>My Work</h1>
          </div>
          <div className='w-96 h-72 flex items-center justify-center p-4 '>
            <div>
              <a  href='https://github.com/Stevekatana?tab=repositories'
                  target='blank'
                  className='text-center text-xl flex items-center justify-center gap-3 shadow-md shadow-black border-5 border-solid border-black p-4 rounded-whoop hover:bg-black hover:text-white lg:w-72'>
                Check out my Github
                <BsGithub className='text-2xl'/>
              </a>
              <a  href='https://www.instagram.com/_k.atana/' target='_blank'
              className=' mt-5 text-xl flex items-center justify-center gap-3 shadow-md shadow-black border-5 border-solid border-black p-4 rounded-whoop hover:bg-black hover:text-white lg:w-72'>
                Check out my Photos
                <FaImage  className='text-2xl'/>
              </a>
              <a  href='https://kenyatripsafaris.com'
                  target='blank'
                  className='text-center mt-5 text-xl flex items-center justify-center gap-3 shadow-md shadow-black border-5 border-solid border-black p-4 rounded-whoop hover:bg-black hover:text-white lg:w-72'>
                KenyaTripSafaris.com
                <BsGithub className='text-2xl'/>
              </a>

            </div>
          </div>
        </div>
      </section>

      <section ref={contactRef} className='bg-gray-300 rounded-tl-whoop rounded-tr-whoop p-4'>
        <div>
          <div className='flex items-center justify-center mb-5'>
            <h1 className='font-semibold text-3xl lg:text-4xl'>Contact Me</h1>
          </div>
          <div>
            <div className='p-3 flex items-center justify-center mb-4'>
              <span className='text-lg mr-2'>Email: </span>
              <span>
                <a href="mailto:ksteve173@gmail.com" className='text-xl underline font-semibold'>Ksteve173@gmail.com</a>
              </span>
            </div>
            <div className='flex items-center justify-center'>
              <a href='https://www.instagram.com/_k.atana/' target='_blank' className='text-xl'>Instagram</a>
              <span className='ml-2 mr-2'>/</span>
              <a href='https://www.linkedin.com/in/stephen-katana-b906ba261/' target='_blank' className='text-xl'>LinkedIn</a>
              <span className='ml-2 mr-2'>/</span>
              <a href='https://wa.me/254702270333' target='_blank' className='text-xl'>WhatsApp</a>
            </div>
            <div className='text-center mt-5'>
              <p>&copy; 2025 All rights reserved </p>
            </div>
          </div>
        </div>
      </section>
      <div onClick={scrollToHome} className='bg-black text-white flex items-center justify-center w-14 h-14 fixed bottom-5 right-5 rounded-full'>
        <IoIosArrowUp  className='text-3xl'/>
      </div>
    </div>
  )
}

export default App
