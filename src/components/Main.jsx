import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import Manifesto from './Manifesto'
import Footer from './Footer'

function Main() {
    return (
        <>
            <main className='h-screen w-full bg-white pl-10 pr-10'>
                <Navbar />
                <HeroSection />
                <Manifesto />
                <footer className='w-full'>
                    <Footer />
                </footer>
            </main>

        </>
    )
}

export default Main
