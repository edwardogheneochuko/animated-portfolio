

import { SelectedPage } from '../../shared/type'
import { motion } from 'framer-motion'
import Heading from '../../shared/Heading'
import { Email, GitHub, LinkedIn } from '@mui/icons-material'

import pumpkin from "../../imgs/pumpkin.mp4"

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Contact = ({setSelectedPage}: Props) => {
  return (
    <section id='contact' className='text-white md:w-5/6 py-50 mx-auto px-5 relative'>
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}>
            <Heading number="04" heading="Contact" />
            
            <div className='mt-10 text-center text-2xl font-mono grid grid-cols-2 gap-5 font-semibold relative z-10'>
                <a href="https://github.com/edwardogheneochuko">
                    <button><GitHub /> Github</button>
                </a>
                <a href='https://www.linkedin.com/in/edward-ogheneochuko/'>
                    <button><LinkedIn /> LinkedIn</button>
                </a>
                <a href="mailto:headiesed@gmail.com">
                    <button><Email /> Email</button>
                </a>
            </div>

            {/* Transparent Video with autoplay, muted, loop */}
            <video 
                src={pumpkin} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute top-0 left-0 w-full h-full object-cover opacity-60 pointer-events-none"
            />
        </motion.div>
    </section>
  )
}

export default Contact

