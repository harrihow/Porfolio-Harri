import React from 'react'
import ticketGeneratorImg from '../../../assets/images/ticket.png'
import machinarriImg from '../../../assets/images/machinarri.png'


function Projects() {
  // Project Data Structure for future maintainability
  const projects = [
    {
      id: 1,
      title: "Ticket Helper Generator",
      category: "Web Application",
      description: "A lightweight web tool built with React to streamline ticket creation during high-volume support calls. Instead of typing the same details repeatedly, agents can quickly fill out a simple form, auto-generate a structured template, and copy it with one click. This improves speed, consistency, and reduces stress in fast-paced customer support environments.",
      image: ticketGeneratorImg,
      imageAlt: "Ticket Helper Generator",
      features: [
        "One-click template generation",
        "Improved support efficiency",
        "Reduced typing errors",
        "Streamlined workflow"
      ],
      technologies: ["React", "JavaScript", "CSS", "HTML"],
      liveDemoUrl: "https://harrihow.github.io/react-ticket-helper-generator/"
    },
    {
      id: 2,
      title: "Machinarri Auto Parts Trading",
      category: "Business Website",
      description: "A simple, responsive website built to showcase automotive parts and services. Designed with clarity and ease of navigation in mind, it provides a clean layout for browsing products and highlights the brand's professional identity. This project demonstrates fundamental web development skills and attention to user-friendly design.",
      image: machinarriImg,
      imageAlt: "Machinarri Auto Parts Trading",
      features: [
        "Responsive design",
        "Clean navigation",
        "Professional branding",
        "Product showcase"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      liveDemoUrl: "https://harrihow.github.io/machinarri/"
    },
  ];

  return (
    <main className='min-h-screen w-full bg-white py-20 px-4 sm:px-6 lg:px-8' id='projects'>
      <div className='max-w-7xl mx-auto'>
        {/* Header Section */}
        <section className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>My Projects</h1>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            A collection of projects that showcase my approach to solving real-world problems through thoughtful design and engineering.
          </p>
        </section>

        {/* Projects Grid */}
        <section className='mb-20'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12'>
            {projects.map(
              (project) => (
              <div key={project.id} className='bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300'>
                {/* Project Image */}
                <div className='w-full h-56 bg-gray-100 flex items-center justify-center'>
                  <img 
                    src={project.image} 
                    alt={project.imageAlt}
                    className='max-w-full max-h-full object-contain p-4'
                  />
                </div>
                
                {/* Project Content */}
                <div className='p-6 md:p-8'>
                  {/* Category and Title */}
                  <div className='mb-5'>
                    <div className='flex items-center justify-between mb-3'>
                      <span className='text-sm font-semibold text-indigo-600 uppercase tracking-wider'>
                        {project.category}
                      </span>
                      <div className='h-px flex-1 bg-gray-300 ml-3'></div>
                    </div>
                    <h2 className='text-2xl font-bold text-gray-900 mb-3'>
                      {project.title}
                    </h2>
                  </div>

                  {/* Description */}
                  <p className='text-gray-700 mb-6 leading-relaxed'>
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className='mb-6'>
                    <h3 className='text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider'>
                      Key Features
                    </h3>
                    <ul className='grid grid-cols-2 gap-2'>
                      {project.features.map((feature, index) => (
                        <li key={index} className='text-sm text-gray-600 flex items-start'>
                          <span className='w-1.5 h-1.5 bg-indigo-600 rounded-full mt-1.5 mr-2 flex-shrink-0'></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className='mb-6'>
                    <h3 className='text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider'>
                      Technology Stack
                    </h3>
                    <div className='flex flex-wrap gap-2'>
                      {project.technologies.map((tech, index) => (
                        <span key={index} className='px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full'>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className='flex justify-center'>
                    <a 
                      href={project.liveDemoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className='px-5 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200 inline-flex items-center'
                    >
                      View Live Demo
                      <svg className='w-4 h-4 ml-2' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default Projects