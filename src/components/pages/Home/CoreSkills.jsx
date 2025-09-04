import React from 'react'

function CoreSkills() {
    return (
        <>
            <main className="min-h-screen w-full font-satoshi space-y-12">
                <section className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold">Core Skills</h1>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-3 px-12">
                    <div className="p-6 border">
                        <h2 className="text-xl font-semibold mb-2">Frontend Development</h2>
                        <p>React, HTML, CSS, JavaScript, TypeScript</p>
                    </div>
                    <div className="p-6 border">
                        <h2 className="text-xl font-semibold mb-2">UI/UX Focus</h2>
                        <p>Designing with empathy, building user-friendly interfaces</p>
                    </div>
                    <div className="p-6 border">
                        <h2 className="text-xl font-semibold mb-2">Collaboration</h2>
                        <p>Experience working across teams and solving problems together</p>
                    </div>
                </section>
            </main>
        </>
    )
}

export default CoreSkills
