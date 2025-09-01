import React from 'react'
import aboutPic from '../assets/aboutpic.jpg'
import Navbar from './Navbar'
import Footer from './Footer'

function About() {
    return (
        <>
            <main className='h-full w-full bg-white pl-10 pr-10'>
                <Navbar />
                <main className='flex items-center justify-center min-h-screen'>
                    <section className='w-1/2 flex justify-center items-center'>
                        <img src={aboutPic} alt="About Picture" className="max-w-sm h-auto" />
                    </section>
                    <section className='w-1/2 flex justify-center items-center'>
                        <div className='px-8 py-12 max-w-lg'>
                            <p className='font-light leading-relaxed text-black font-sm'>
                                I believe the most meaningful systems are created when empathy meets engineering.<br/><br/>
                                My name is Harri. My journey started not in a code editor, but on the frontlines of customer support — solving problems in real time, listening deeply, and understanding what people truly need.<br/><br/>
                                That experience shapes how I approach software today. With a background in Computer Engineering and experience across support and sales, I've learned to combine technical knowledge with communication strength and adaptability. Every project deserves clarity, collaboration, and solutions built to last.
                            </p>
                        </div>
                    </section>
                </main>
            </main>
            <Footer/>
        </>
    )
}

export default About