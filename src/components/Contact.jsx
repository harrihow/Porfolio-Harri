import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Contact() {
    return (
        <>
            <nav className='pl-4 pr-4'>
                <Navbar />
            </nav>

            <main className='flex'>
                <section className='w-1/2 min-h-screen flex flex-col justify-center items-center px-8'>
                    <div className='text-center space-y-1'>
                        <h1 className='text-[5rem] font-bold leading-none'>CONTACT FORM</h1>
                        <p className='leading-relaxed text-justify pl-2'>A project, a brand, a desire to collaborate? Fill out the form and I'll get<br />
                            back to you within 24 to 48 hours to schedule a discovery call and <br />
                            see how I can help you.</p>
                    </div>
                </section>
                <section className='w-1/2 min-h-screen flex justify-center items-center'>
                    <div className='w-full max-w-md px-8'>
                        <form className='space-y-6'>
                            <div className='space-y-2'>
                                <label htmlFor='brandName' className='block text-sm font-medium text-gray-700'>
                                    Brand/Company Name: <span className='text-red-500'>*</span>
                                </label>
                                <p className='text-xs text-gray-500 leading-relaxed'>
                                    If the name is not yet defined, indicate "To be defined"
                                </p>
                                <input
                                    type='text'
                                    id='brandName'
                                    name='brandName'
                                    placeholder='Enter your brand/company name or "To be defined"'
                                    className='w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300'
                                    required
                                />
                            </div>
                            
                            <div className='space-y-3'>
                                <label className='block text-sm font-medium text-gray-700'>
                                    Where are you in your project? <span className='text-red-500'>*</span>
                                </label>
                                <div className='space-y-2'>
                                    <label className='flex items-center space-x-2 cursor-pointer'>
                                        <input type='radio' name='projectStage' value='starting' className='text-blue-500 focus:ring-blue-500' required />
                                        <span className='text-sm text-gray-700'>I'm starting from scratch</span>
                                    </label>
                                    <label className='flex items-center space-x-2 cursor-pointer'>
                                        <input type='radio' name='projectStage' value='changeImage' className='text-blue-500 focus:ring-blue-500' />
                                        <span className='text-sm text-gray-700'>I want to change my image</span>
                                    </label>
                                    <label className='flex items-center space-x-2 cursor-pointer'>
                                        <input type='radio' name='projectStage' value='preparingLaunch' className='text-blue-500 focus:ring-blue-500' />
                                        <span className='text-sm text-gray-700'>I'm preparing a launch</span>
                                    </label>
                                    <label className='flex items-center space-x-2 cursor-pointer'>
                                        <input type='radio' name='projectStage' value='moreEngagement' className='text-blue-500 focus:ring-blue-500' />
                                        <span className='text-sm text-gray-700'>I want to create more engagement</span>
                                    </label>
                                    <label className='flex items-center space-x-2 cursor-pointer'>
                                        <input type='radio' name='projectStage' value='other' className='text-blue-500 focus:ring-blue-500' />
                                        <span className='text-sm text-gray-700'>Other</span>
                                    </label>
                                </div>
                            </div>
                            
                            <div className='space-y-4'>
                                <div>
                                    <label htmlFor="fullname" className='block text-sm font-medium text-gray-700'>
                                        Full Name: <span className='text-red-500'>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="fullname"
                                        name="fullname"
                                        placeholder="Enter your full name"
                                        className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className='block text-sm font-medium text-gray-700'>
                                        Email: <span className='text-red-500'>*</span>
                                    </label>
                                    <input 
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder='Enter your email'
                                        className='w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300'
                                        required
                                    />
                                </div>
                            </div>
                            
                            <div className='pt-4'>
                                <button
                                    type='submit'
                                    className='w-full py-3 px-6 bg-black text-white font-medium text-sm rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300'
                                >
                                    Submit Contact Form
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Contact
