import React from "react"
import CoreSkills from "./CoreSkills"


function HeroSection() {
    return (
        <>
            <main className="min-h-screen w-full font-satoshi px-4 md:px-8 lg:px-12">
                <section className='text-center space-y-8 md:space-y-12 lg:space-y-16 pt-8 md:pt-12 lg:pt-16'>
                    <div className='text-center space-y-2 md:space-y-4'>
                        <h1 className='text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight leading-tight md:leading-none'>Designing with Empathy</h1>
                        <h2 className='text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight leading-tight md:leading-none'>Coding with Precision</h2>
                    </div>
                    <div>
                        <h3 className='text-lg md:text-2xl lg:text-4xl font-semibold px-4'>HARRI FANO - FRONTEND DEVELOPER</h3>
                    </div>
                    <div>
                        <button className='bg-red-500 py-3 px-6 md:py-4 md:px-10 text-base md:text-lg rounded-lg hover:bg-red-700 hover:shadow-md hover:scale-105 transition-all duration-300'>Let's Talk</button>
                    </div>
                    <div className='grid justify-items-center px-4 md:px-8'>
                        <p className="max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto text-sm md:text-base lg:text-lg leading-relaxed">
                            For projects that demand more, scalable, intuitive, and reliable, every interface begins with an idea,
                            a need, a story, and my role is to transform those into seamless digital experiences built with clarity,
                            precision, and a focus on what truly matters.
                        </p>
                    </div>
                </section>
            </main>
            <CoreSkills />

        </>
    )
}

export default HeroSection