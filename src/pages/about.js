import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import AnimatedText from '<portfolio>/components/AnimatedText'
import Layout from '<portfolio>/components/Layout'
import profile from '../../public/images/profile/me.jpeg'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '<portfolio>/components/Skills'
import Experience from '<portfolio>/components/Experience'
import Education from '<portfolio>/components/Education'
import TransitionEffect from '<portfolio>/components/TransitionEffect'


const AnimatedNumbers = ({value}) =>{
    const ref= useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration:3000});
    const isInView = useInView(ref, {once:true});
    
    useEffect(()=>{
        if(isInView){
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(()=>{
        springValue.on('change', (latest)=>{
            if(ref.current && latest.toFixed(0)<= value) {
                ref.current.textContent= latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}
const about = () => {
    return (
        <>
            <Head>
                <title>AndreaFlo | About Page </title>
                <meta name='description' content='any description' />
            </Head>
            <TransitionEffect />
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text='I am fueled by my passion for diverse content creation.' className='mb-16 lg:!text-2xl sm:!text-4xl xs:!text-2xl sm:mb-8' />
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                            <h2 className='mb-4 text-m font-bold uppercase text-dark/75 dark:text-light/75'>About me</h2>
                            <p className='font-medium'>
                                Hello, I am Andrea Flores, a full-stack web developer who is passionate about technology and creating impactful experiences through its use. I recently graduated from Laboratoria, and it has been an incredible journey of learning and gaining knowledge that continues to fuel my enthusiasm for this beautiful career.
                            </p>
                            <p className=' my-4 font-medium'>
                                I believe that designing and creating are unique experiences where you have the ability to assist individuals in bringing their ideas to life. There are no limits to creativity, and in the process, you develop truly powerful skills that can make a difference.
                            </p>
                            <p className='font-medium'>
                                I am dedicated to staying informed and constantly enriching my skills in order to provide the best solutions. I am excited about the endless possibilities that technology offers and look forward to using it to make a positive impact.
                            </p>
                        </div>
                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-light dark:bg-light'/>
                            <Image src={profile} alt='AndreaFlo' className='w-full h-auto rounded-2xl' priority sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw'/>
                        </div>

                        <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3 '>
                            
                        <div className='flex flex-col items-end justify-center xl:items.center   '>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers value={100} />%
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:items-center md:text-lg sm:text-base xs:text-sm'>good attitude</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold  md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers value={10} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:items-center md:text-lg sm:text-base xs:text-sm'>projects completed</h2>
                        </div >

                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold  md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers value={100} />%
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:items-center md:text-lg sm:text-base xs:text-sm'>Teamwork</h2>
                        </div>

                        </div>
                    </div>
                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>
    )
}

export default about