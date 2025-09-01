import React from 'react'
import Time from './ui/TimeWhite'

function Footer() {
    return (
        <>
            <footer className='bg-black text-white'>
                <div className='flex justify-between p-5'>
                    <div className='font-light text-md '>
                        <p>QUEZON CITY, PHILIPPINES UTC+8</p>
                        <Time />
                    </div>
                    <div>
                        <p>Designing the Web of Tomorrow</p>
                    </div>
                </div>
                <div className='overflow-hidden whitespace-nowrap'>
                    <p className='text-[8rem] leading-none font-bold text-center inline-block animate-marquee'>DESIGN BY HARRI FANO © DESIGN BY HARRI FANO</p>
                </div>
            </footer>
        </>
    );
}

export default Footer
