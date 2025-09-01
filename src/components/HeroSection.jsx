
import ParticlesComponent from './ui/particles'
import harriImage from '../assets/harribw.jpg'


function HeroSection() {
    return (
        <>
            <section className='h-[50%] w-full flex justify-start items-center'>
                <span className='block leading-tight font-bold -space-y-1 tracking-tight'>
                    <p className='m-0'>FOR BRANDS WITH HIGH STANDARDS —</p>
                    <p className='m-0'>STRATEGIC, AESTHETIC, FUNCTIONAL</p>
                    <p className='m-0'>—STRATEGY TO DESIGN </p>
                </span>
            </section>
            <section className='h-[40%] w-full flex justify-between'>
                <div className='grid grid-rows-2 justify-start items-center'>
                    <span className='block -space-y-1 text-base tracking-tight leading-tight'>
                        <p className='m-0'>Behind every brand lies a thought. An attitude. A story.</p>
                        <p className='m-0'>My job is to make all of this visible – with clarity, substance, and an eye for the essential.</p>
                    </span>
                </div>
                <div>
                    <img src={harriImage} alt="Harri" className="max-w-[220px] h-auto" />
                </div>

            </section>
        </>
    )
}

export default HeroSection