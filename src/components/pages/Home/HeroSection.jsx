import React from "react"

function HeroSection() {
    return (
        <>
            <main className='flex flex-col items-center justify-center h-screen w-full font-satoshi' id='home'>
                <section className="space-y-4">
                    <div className="">Hi! my name is</div>
                    <div className="space-y-2">
                        <h1 className="text-8xl font-bold">Harri Fano</h1>
                        <h2 className="text-4xl font-bold">I build things for the web — simple, fast, and impactful.</h2>
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