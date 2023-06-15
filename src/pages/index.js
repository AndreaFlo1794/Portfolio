import Layout from '../components/Layout'
import Image from 'next/image'
import woman from '../../public/images/profile/mujeryperro.png'
import Head from 'next/head'
import AnimatedText from '<portfolio>/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '<portfolio>/components/Icons'
import HireMe from '<portfolio>/components/HireMe'
import img from '../../public/images/svgs/miscellaneous_icons_1.svg'
import TransitionEffect from '<portfolio>/components/TransitionEffect'

export default function Home() {
  return (
    <>
      <Head>
        <title>My portfolio</title>
        <meta name='description' content='Generate bu create next app' />
      </Head>

      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light '>

        <Layout className='pt-0 md:p-16 sm:pt-8'>

          <div className='flex items-center justify-between w-full lg:flex-col'>

            <div className='w-1/2 md:w-full'>

              <Image src={woman} alt='AndreaFlo' className='w-full h-auto lg:hidden md:inline-block md:w-full '
                priority sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw' />
            </div>

            <div className='w-1/2 flex  flex-col items-center self-center lg:w-full lg:text-center'>

              <AnimatedText text="Making mental puzzles and taking them to code to make them come true." className='!text-5xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'
              />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                As a skilled full-stack developer, I am dedicated to turning ideas into reality.
                You can take a look at my latest projects, showing my expertise and learning in React and web development.</p>

              <div className='flex items-center self-start mt-2 lg:self-center '>

                <Link href='/AndreaCV.pdf' target={'_blank'}
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px4 md:text-base'
                  download={true}
                >Resume <LinkArrow className={'w-6 ml-1'} />
                </Link>

                <Link href='/DEVACTUAL.pdf' target={'_blank'}
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark ml-4 dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px4 md:text-base'
                  download={true}
                >CV<LinkArrow className={'w-6 ml-1'} />
                </Link>

                <Link href='andreaflo1794@gmail.com' target={'_blank'}
                  className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'>
                  Contact</Link>

              </div>
            </div>
          </div>
        </Layout>
        <HireMe />

        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden '>
          <Image src={img} alt='AndreaFlo' className='w-full h-auto'></Image>
        </div>
        
      </main>
    </>
  )
}
