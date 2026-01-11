import React, { useState, useEffect } from 'react'
import Steve from '../src/assets/katana.jpg'
import Katana from '../src/assets/Steve.jpg'
import { BsGithub, BsLinkedin, BsInstagram, BsWhatsapp, BsCamera, BsCodeSlash } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaImage } from "react-icons/fa6";
import { FiCommand } from "react-icons/fi";
import { MdEmail, MdArrowUpward } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const homeRef = React.useRef(null)
  const aboutRef = React.useRef(null)
  const workRef = React.useRef(null)
  const contactRef = React.useRef(null)

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const menuItems = [
    { label: 'Home', ref: homeRef },
    { label: 'My Story', ref: aboutRef },
    { label: 'My Work', ref: workRef },
    { label: 'Contact', ref: contactRef }
  ]

  const socialLinks = [
    { icon: <BsInstagram />, label: 'Instagram', url: 'https://www.instagram.com/_k.atana/', color: 'hover:text-pink-600' },
    { icon: <BsLinkedin />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/stephen-katana-b906ba261/', color: 'hover:text-blue-700' },
    { icon: <BsWhatsapp />, label: 'WhatsApp', url: 'https://wa.me/254702270333', color: 'hover:text-green-600' }
  ]

  const workItems = [
    {
      title: 'GitHub Portfolio',
      icon: <BsGithub className="text-3xl" />,
      url: 'https://github.com/Stevekatana?tab=repositories',
      description: 'View my code repositories'
    },
    {
      title: 'Photography Portfolio',
      icon: <FaImage className="text-3xl" />,
      url: 'https://www.instagram.com/_k.atana/',
      description: 'Browse my photography work'
    },
    {
      title: 'KenyaTripSafaris.com',
      icon: <FaLaptopCode className="text-3xl" />,
      url: 'https://kenyatripsafaris.com',
      description: 'Web development project'
    }
  ]

  return (
    <div className="font-sans bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div 
              onClick={() => scrollToSection(homeRef)} 
              className="flex items-center space-x-2 cursor-pointer group"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-black to-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SK</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                STEPKAT
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.ref)}
                  className="text-gray-700 hover:text-black font-medium relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <GiHamburgerMenu className="text-2xl text-gray-700" />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 bg-white rounded-xl shadow-xl p-4 animate-fadeIn">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.ref)}
                  className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-black rounded-lg transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={homeRef} className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="container mx-auto text-center">
          {/* Profile Image */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black rounded-full transform rotate-3 animate-pulse-slow"></div>
            <img
              src={Steve}
              alt="Stephen Katana"
              className="relative w-full h-full rounded-full object-cover border-8 border-white shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Tagline */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
            Stephen Katana
          </h2>

          {/* Skills */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10">
            {[
              { icon: <BsCodeSlash />, label: 'Develop' },
              { icon: <BsCamera />, label: 'Capture' },
              { icon: <FiCommand />, label: 'Inspire' }
            ].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <div className="text-2xl md:text-3xl text-gray-800 group-hover:text-black">
                    {skill.icon}
                  </div>
                </div>
                <span className="mt-2 text-lg font-medium text-gray-700">
                  {skill.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection(workRef)}
            className="px-8 py-4 bg-gradient-to-r from-black to-gray-800 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 group"
          >
            Explore My Work
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                My Story
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-gray-800 to-gray-600 mx-auto rounded-full"></div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Image */}
              <div className="lg:w-2/5">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-gray-800 to-black rounded-2xl opacity-20 blur-lg"></div>
                  <img
                    src={Katana}
                    alt="Stephen Katana"
                    className="relative rounded-2xl shadow-2xl w-full h-auto transform hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-3/5">
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Hi, I'm <span className="text-gray-900">Stephen Katana</span>
                  </h3>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    A passionate photographer with a keen eye for capturing moments and telling stories through stunning visuals. 
                    Also a skilled web developer, combining creativity with technical expertise to craft visually engaging and 
                    user-friendly websites. Dedicated to bringing ideas to life both behind the lens and on the screen.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                  {[
                    { value: '5+', label: 'Years Experience' },
                    { value: '5', label: 'Projects' },
                    { value: '∞', label: 'Creativity' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                      <div className="text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section ref={workRef} className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              My Work
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore my projects across photography and web development
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            {workItems.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 h-full border border-gray-100">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <div className="text-white">{item.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-black">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <div className="inline-flex items-center text-gray-800 font-medium group-hover:text-black">
                    View Project
                    <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Let's Connect
              </h2>
              <p className="text-xl text-gray-300">
                Have a project in mind? Let's create something amazing together
              </p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center mb-10">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center">
                  <MdEmail className="text-2xl" />
                </div>
                <a
                  href="mailto:ksteve173@gmail.com"
                  className="text-2xl font-bold hover:text-cyan-300 transition-colors"
                >
                  ksteve173@gmail.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center group ${social.color}`}
                >
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all mb-3">
                    <div className="text-2xl">{social.icon}</div>
                  </div>
                  <span className="font-medium">{social.label}</span>
                </a>
              ))}
            </div>

            {/* Footer */}
            <div className="text-center mt-12 pt-8 border-t border-white/20">
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} Stephen Katana. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Crafted with passion and precision
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={() => scrollToSection(homeRef)}
        className={`fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-r from-black to-gray-800 text-white shadow-lg flex items-center justify-center transform hover:scale-110 transition-all duration-300 ${isScrolled ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      >
        <MdArrowUpward className="text-2xl" />
      </button>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default App