import React from "react"

function HeroSection() {
    return (
        <>
            <main className='flex flex-col items-center text-white justify-center h-screen mx-auto font-satoshi bg-gradient-to-r from-[#040F16] to-[#005E7C]' id='home'>
                <section className="space-y-4">
                    <div>
                        <h1 className="text-2xl">Hi! my name is</h1>
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-8xl font-bold">Harri Fano</h1>
                        <h2 className="text-4xl font-bold">I turn ideas into clean, working websites — fast, functional, and built to grow.</h2>
                    </div>
                    <p className="text-md">I started my journey on the frontlines of customer support, <br />
                        where empathy and problem-solving shaped how I see technology. <br />
                        Today, as a frontend developer, I bring that same focus into crafting <br />
                        seamless interfaces that balance thoughtful design with precise engineering.
                    </p>
                    <button className="px-4 border-2 border-black rounded-lg py-1">Let's Connect</button>
                </section>
            </main>
        </>
    )
}

export default HeroSection