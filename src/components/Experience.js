import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import Lilcon from "./Lilcon"
const Details = ({ position, company, time, address, work }) => {
    const ref = useRef(null);
    return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
        <Lilcon reference={ref} />
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:'spring'}}>
            
            <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{position}&nbsp; @{company}</h3>
            <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                {time} | {address}
            </span>
            <p className="font-medium w-full md:text-sm ">
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ['start end', "center start"]
        }
    )
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Experience
            </h2>
            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"></motion.div>
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <Details
                        position='Human Resources Assistant' company='Kuzoba'
                        time='May 2021 - October 2022' address='Chorrillos'
                        work='Responsible for the staff recruitment process and their renewals, participation with the
                              Recruitment and Selection Coordinator in the elaboration, organization and execution of
                              motivation, recreation and social welfare programs and/or activities for the worker.
                              Verify compliance with the procedures of the Quality Management System.'
                    />
                    <Details
                        position='Human Resources Assistant' company='Goicochea Print'
                        time='June 2020 - May 2021
                        ' address='Cercado de Lima'
                        work='I updated the tests that were applied to the applicants, in addition to that I implemented training for
                        staff, improving their motivation and performance.
                        I was also in charge of some administrative tasks, such as preparation of payrolls, delivery of
                        payment slips, settlements.'
                    />
                    <Details
                        position='Human Resources Assistant' company='Editorial San Marcos'
                        time='January 2019 - December 2019' address='Cercado de Lima'
                        work='Restructure the way to search for candidates, through publications in various labor exchanges, which
                        that reduced the term of the selection process by 40%, that is, from 10 days it took to find the
                        suitable candidate, was reduced to 4 days'
                    />
                </ul>

            </div>

        </div>
    )
}

export default Experience