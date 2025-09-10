import React from 'react'
import bgwebsite from '../../../assets/images/bgwebsite.jpg'
import branding from '../../../assets/images/branding.jpg'

function Services() {
    return (
        <>
            <main className='min-h-screen w-full grid grid-cols-2' id='services'>
                <section className='flex justify-center items-center'>
                    <div className='space-y-4'>
                        <h1 className='text-7xl font-bold'>Website</h1>
                        <div className='grid grid-cols-3 grid-rows-2 gap-1 '>
                            <p className='block'>• UI/UX</p>
                            <p className='block'>• Development</p>
                            <p className='block'>• SEO</p>
                            <p className='block'>• Responsive Mobile</p>
                            <p className='block'>• Custom Made</p>
                        </div>
                        <hr className="border-gray-300" />
                        <div>
                            <p className='font-light leading-tight'>
                                A website goes beyond being a showcase—it’s an experience. I build <br />
                                tailored sites that merge thoughtful UX, elegant UI, <br />
                                and engaging interactions, brought to life through animations, <br />
                                micro-effects, and smooth storytelling. <br />
                            </p>
                        </div>
                        <hr className="border-gray-300" />
                        <div>
                            <p>6 to 8 weeks</p>
                        </div>
                        <hr className="border-gray-300" />
                        <div>
                            <p className="hover:underline hover:decoration-gray-300 cursor-pointer transition-all duration-600 ">I am interested in this service</p>
                        </div>
                    </div>
                </section>
                <section className='flex justify-center items-center'>
                    <img src={bgwebsite} alt="Website" className="w-auto h-auto" />
                </section>
            </main>
            <main className='min-h-screen w-full grid grid-cols-2'>
                <section className='flex justify-center items-center'>
                    <div className='space-y-4'>
                        <h1 className='text-7xl font-bold'>Branding</h1>
                        <div className='grid grid-cols-2 gap-x-4 gap-y-1 max-w-md'>
                            <p className='block'>• Brand Strategy</p>
                            <p className='block'>• Visual Identity</p>
                            <p className='block'>• Complete Graphic Charter</p>
                            <p className='block'>• Brand Book</p>
                            <p className='block'>• Print</p>
                        </div>
                        <hr className="border-gray-300" />
                        <div>
                            <p className='font-light leading-tight'>
                                My branding process begins with understanding your mission, <br />
                                vision, positioning, and audience. <br />
                                From there, I create a visual language unique to your brand. <br />
                                The result is a strong, consistent identity that reflects who you are. <br />
                                Clear and aligned with your goals, it builds recognition and impact. <br />
                            </p>
                        </div>
                        <hr className="border-gray-300" />
                        <div>
                            <p>4 to 6 weeks</p>
                        </div>
                        <hr className="border-gray-300" />
                        <div>
                            <p className="hover:underline hover:decoration-gray-300 cursor-pointer transition-all duration-600 ">I am interested in this service</p>
                        </div>
                    </div>
                </section>
                <section className='flex justify-center items-center'>
                    <img src={branding} alt="Website" className="w-auto h-auto" />
                </section>
            </main>
        </>
    )
}

export default Services
