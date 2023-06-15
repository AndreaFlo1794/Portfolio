import Link from "next/link"
import { motion } from "framer-motion";

const MotionLink= motion(Link);
const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2" >

        <MotionLink href="/"
        className="w-16 h-16 bg-[#5dc1b9] text-light flex items-center justify-center rounded-full text-2xl font-bold border border solid broder-transparent dark:border-light"
        whileHover={{
          backgroundColor:["#5dc1b9", "#fabfb7", "#fdf9c4","#ffda9e","#c5c6c8","#b2e2f2"],
          transition:{duration:1, repeat: Infinity}
        }} >AF</MotionLink>

    </div>
  )
}

export default Logo