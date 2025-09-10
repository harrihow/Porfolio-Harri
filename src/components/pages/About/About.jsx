import React from 'react'

function About() {
    return (
        <main className='min-h-screen w-full font-satoshi py-20 px-4' id='about'>
            <section className='max-w-7xl mx-auto'>
                <h1 className='text-4xl font-bold text-center mb-16'>Core Skills</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <div className='h-[300px] border-2 border-gray-500 rounded-lg flex flex-col justify-center items-center p-6'>
                        <div className='flex flex-col justify-center items-center space-y-4 text-center'>
                            <div className='flex flex-col justify-center items-center space-y-2'>
                                <span className='text-xl font-semibold'>Frontend Development</span>
                                <span className='text-lg'>Code that scales</span>
                            </div>
                            <p className='text-gray-700'>
                                I build responsive, performant web interfaces using React, Tailwind, and modern JavaScript
                                blending clarity in design with precision in engineering.
                            </p>    
                        </div>
                    </div>
                    <div className='h-[300px] border-2 border-gray-500 rounded-lg flex flex-col justify-center items-center p-6'>
                        <div className='flex flex-col justify-center items-center space-y-4 text-center'>
                            <div className='flex flex-col justify-center items-center space-y-2'>
                                <span className='text-xl font-semibold'>UI/UX Design</span>
                                <span className='text-lg'>Design that connects</span>
                            </div>
                            <p className='text-gray-700'>
                                Passionate about crafting interfaces that balance usability with aesthetics. I focus on accessibility,
                                intuitive flows, and experiences guided by empathy.
                            </p>
                        </div>
                    </div>    
                    <div className='h-[300px] border-2 border-gray-500 rounded-lg flex flex-col justify-center items-center p-6'>
                        <div className='flex flex-col justify-center items-center space-y-4 text-center'>
                            <div className='flex flex-col justify-center items-center space-y-2'>
                                <span className='text-xl font-semibold'>Collaboration</span>
                                <span className='text-lg'>Teamwork that delivers</span>
                            </div>
                            <p className='text-gray-700'>
                                Shaped by my background in customer support and sales, I bring strong communication and collaboration
                                skills — ensuring smooth teamwork, clear documentation, and shared success in every project.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default About