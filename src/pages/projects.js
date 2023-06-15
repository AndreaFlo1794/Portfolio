import AnimatedText from "<portfolio>/components/AnimatedText"
import Layout from "<portfolio>/components/Layout"
import Head from "next/head"
import Image from "next/image"
import {motion} from "framer-motion"
import { GithubIcon } from "<portfolio>/components/Icons"
import SocialNetwork from "../../public/images/projects/SocialNetwork.jpg"
import Card from "../../public/images/projects/Card.jpg"
import Studio from "../../public/images/projects/Studio.jpg"
import Redesign from "../../public/images/projects/Redesign.jpg"
import Lab from "../../public/images/projects/Lab.jpg"
import Md from "../../public/images/projects/Md.jpg"
import TransitionEffect from "<portfolio>/components/TransitionEffect"

const FramerImage = motion(Image);
const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">

      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 xs:h-[102%] xs:w-full xs:rounded-[1.5rem]"/>
      
      <a href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full" >
        <FramerImage src={img} alt={title} className='w-full h-auto' 
        whileHover={{scale:1.05}}
        transition={{duration:0.2}}
        priority sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw'/>
      </a>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-teal-600 font-medium text-xl dark:text-teal-300 xs:text-base">{type}</span>
        <a href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
        </a>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm ">{summary}</p>
        <div className="mt-2 flex items-center" >
          <a href={github} target="_blank" className="w-10"><GithubIcon /></a>
          <a href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text- font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base ">Visit Project</a>
        </div>
      </div>
    </article>
  )
}

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">

      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"/>

      <a href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg" >
        <Image src={img} alt={title} className='w-full h-auto' />
      </a>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-teal-600 font-medium text-xl dark:text-teal-300 lg:text-lg md:text-base">{type}</span>
        <a href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">{title}</h2>
        </a>
        <div className="w-full mt-2 flex items-center justify-between" >
          <a href={link} target="_blank" className="text-lg font-semibold underline md:text-base">Visit</a>
          <a href={github} target="_blank" className="w-8 md:w-6">{''}<GithubIcon />{''}</a>
        </div>
      </div>
    </article>
  )
}

const Projects = () => {
  return (
    <>
      <Head>
        <title>AndreaFlo | Projects Page</title>
        <meta name='description' content='any description' />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text='My creations!' className="mb-16 lg:!text-7xl  sm:mb-8 sm:!text-6xl xs:!text-4xl "
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-x-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title='Redesign'
                img={Redesign}
                summary='Redesign of a platform for movies, React was used with Next.js, Typescript, Firebase, I used the TMBD API for the movie collection and deployed with Vercel.'
                link="https://redesign-nu.vercel.app/"
                github="https://github.com/AndreaFlo1794/Redesign"
                type='Featured Project'
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title='Card Validation'
                img={Card}
                link="https://andreaflo1794.github.io/DEV003-card-validation/"
                github="https://github.com/AndreaFlo1794/DEV003-card-validation"
                type='Project'
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title='Data-Lovers: Studio Ghibli'
                img={Studio}
                link=" https://andreaflo1794.github.io/DEV003-data-lovers/"
                github="https://github.com/AndreaFlo1794/DEV003-data-lovers"
                type='Project'
              />
            </div>
            <div className="col-span-12 ">
              <FeaturedProject
                title='Social Network: Petgram'
                img={SocialNetwork}
                summary='Social network that allows the user to enter, register and also log in(with firebase) their
              personal data, post and react or comment, using Javascript, HTML, CSS and Firebase'
                link="social-network-a6b7f.web.app/"
                github="https://github.com/AndreaFlo1794/DEV003-social-network"
                type='Featured Project'
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title='Md-Links'
                img={Md}
                link="https://www.npmjs.com/package/md-links-andreaflo"
                github="https://github.com/AndreaFlo1794/DEV003-md-links"
                type='Project'
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title='LabNotes'
                img={Lab}
                link=" https://dev-003-notes-nine.vercel.app/"
                github="https://github.com/AndreaFlo1794/DEV003-notes"
                type='Project'
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default Projects