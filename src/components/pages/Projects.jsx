import React from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import ticketGeneratorImg from '../../assets/images/projects/ticket.png'
import machinarriImg from '../../assets/images/projects/machinarri.png'

function Projects() {
  return (
    <>
      <main className='min-h-screen w-full bg-white pl-10 pr-10'>
        <Navbar />
        
        <section className='flex flex-col items-center justify-center pt-20 pb-16'>
          <h1 className='text-5xl font-light tracking-tighter text-black mb-4'>Projects</h1>
          <p className='text-lg font-light text-gray-600 max-w-2xl text-center leading-relaxed'>
            A collection of projects that showcase my approach to solving real-world problems through thoughtful design and engineering.
          </p>
        </section>

        <section className='pb-20'>
          <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
              
              <div className='bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300'>
                <div className='w-full h-64 bg-white flex items-center justify-center'>
                  <img 
                    src={ticketGeneratorImg} 
                    alt="Ticket Helper Generator"
                    className='max-w-full max-h-full object-contain'
                  />
                </div>
                
                <div className='p-8'>
                  <div className='mb-6'>
                    <div className='flex items-center justify-between mb-4'>
                      <span className='text-sm font-medium text-gray-500 uppercase tracking-wider'>
                        Web Application
                      </span>
                      <div className='h-1 w-12 bg-black'></div>
                    </div>
                    <h2 className='text-2xl font-light tracking-tight text-black mb-4'>
                      Ticket Helper Generator
                    </h2>
                  </div>

                  <p className='text-gray-700 font-light leading-relaxed mb-6'>
                    A lightweight web tool built with React to streamline ticket creation during high-volume support calls. Instead of typing the same details repeatedly, agents can quickly fill out a simple form, auto-generate a structured template, and copy it with one click. This improves speed, consistency, and reduces stress in fast-paced customer support environments.
                  </p>

                  <div className='mb-6'>
                    <h3 className='text-sm font-medium text-gray-900 mb-3 uppercase tracking-wider'>
                      Key Features
                    </h3>
                    <ul className='grid grid-cols-2 gap-2'>
                      <li className='text-sm text-gray-600 flex items-center'>
                        <span className='w-1.5 h-1.5 bg-black rounded-full mr-2'></span>
                        One-click template generation
                      </li>
                      <li className='text-sm text-gray-600 flex items-center'>
                        <span className='w-1.5 h-1.5 bg-black rounded-full mr-2'></span>
                        Improved support efficiency
                      </li>
                      <li className='text-sm text-gray-600 flex items-center'>
                        <span className='w-1.5 h-1.5 bg-black rounded-full mr-2'></span>
                        Reduced typing errors
                      </li>
                      <li className='text-sm text-gray-600 flex items-center'>
                        <span className='w-1.5 h-1.5 bg-black rounded-full mr-2'></span>
                        Streamlined workflow
                      </li>
                    </ul>
                  </div>

                  <div className='mb-6'>
                    <h3 className='text-sm font-medium text-gray-900 mb-3 uppercase tracking-wider'>
                      Technology Stack
                    </h3>
                    <div className='flex flex-wrap gap-2'>
                      <span className='px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-200'>
                        React
                      </span>
                      <span className='px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-200'>
                        JavaScript
                      </span>
                      <span className='px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-200'>
                        CSS
                      </span>
                      <span className='px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-200'>
                        HTML
                      </span>
                    </div>
                  </div>

                  <div className='flex justify-center'>
                    <a 
                      href="https://harrihow.github.io/react-ticket-helper-generator/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className='px-6 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:border-gray-400 transition-colors duration-200'
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              <div className='bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300'>
                <div className='w-full h-64 bg-white flex items-center justify-center'>
                  <img 
                    src={machinarriImg} 
                    alt="Machinarri Auto Parts Trading"
                    className='max-w-full max-h-full object-contain'
                  />
                </div>
                
                <div className='p-8'>
                  <div className='mb-6'>
                    <div className='flex items-center justify-between mb-4'>
                      <span className='text-sm font-medium text-gray-500 uppercase tracking-wider'>
                        Business Website
                      </span>
                      <div className='h-1 w-12 bg-black'></div>
                    </div>
                    <h2 className='text-2xl font-light tracking-tight text-black mb-4'>
                      Machinarri Auto Parts Trading
                    </h2>
                  </div>

                  <p className='text-gray-700 font-light leading-relaxed mb-6'>
                    A simple, responsive website built to showcase automotive parts and services. Designed with clarity and ease of navigation in mind, it provides a clean layout for browsing products and highlights the brand's professional identity. This project demonstrates fundamental web development skills and attention to user-friendly design.
                  </p>

                  <div className='mb-6'>
                    <h3 className='text-sm font-medium text-gray-900 mb-3 uppercase tracking-wider'>
                      Key Features
                    </h3>
                    <ul className='grid grid-cols-2 gap-2'>
                      <li className='text-sm text-gray-600 flex items-center'>
                        <span className='w-1.5 h-1.5 bg-black rounded-full mr-2'></span>
                        Responsive design
                      </li>
                      <li className='text-sm text-gray-600 flex items-center'>
                        <span className='w-1.5 h-1.5 bg-black rounded-full mr-2'></span>
                        Clean navigation
                      </li>
                      <li className='text-sm text-gray-600 flex items-center'>
                        <span className='w-1.5 h-1.5 bg-black rounded-full mr-2'></span>
                        Professional branding
                      </li>
                      <li className='text-sm text-gray-600 flex items-center'>
                        <span className='w-1.5 h-1.5 bg-black rounded-full mr-2'></span>
                        Product showcase
                      </li>
                    </ul>
                  </div>

                  <div className='mb-6'>
                    <h3 className='text-sm font-medium text-gray-900 mb-3 uppercase tracking-wider'>
                      Technology Stack
                    </h3>
                    <div className='flex flex-wrap gap-2'>
                      <span className='px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-200'>
                        HTML
                      </span>
                      <span className='px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-200'>
                        CSS
                      </span>
                      <span className='px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-200'>
                        JavaScript
                      </span>
                      <span className='px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-200'>
                        Responsive Design
                      </span>
                    </div>
                  </div>

                  <div className='flex justify-center'>
                    <a 
                      href="https://harrihow.github.io/machinarri/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className='px-6 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:border-gray-400 transition-colors duration-200'
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className='text-center pb-20'>
          <div className='bg-gray-50 rounded-lg p-12 max-w-4xl mx-auto'>
            <h2 className='text-3xl font-light tracking-tight text-black mb-4'>
              Interested in collaboration?
            </h2>
            <p className='text-lg font-light text-gray-600 mb-8 leading-relaxed'>
              I'm always open to discussing new projects and opportunities to create meaningful solutions together.
            </p>
            <button className='px-8 py-3 bg-black text-white font-medium rounded hover:bg-gray-800 transition-colors duration-200'>
              Get In Touch
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}

export default Projects