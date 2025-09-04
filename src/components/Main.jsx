import React from 'react'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import HeroSection from './pages/Home/HeroSection'

function Main() {
    return (
        <>
            <main className='h-screen w-full bg-white'>
                <Navbar />
                <HeroSection />
                <footer className='w-full'>
                    <Footer />
                </footer>
            </main>
        </>
    )
}

export default Main
