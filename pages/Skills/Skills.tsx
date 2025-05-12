


import { SelectedPage } from '../../shared/type'
import { motion } from 'framer-motion'
import Heading from '../../shared/Heading'
import { skills } from "../../data/data"

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}


const Skills = ({setSelectedPage}: Props) => {
  return (
    <section id='skills'className='text-white md:w-5/6 mt-16 mx-auto px-5'>
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Skills)}>
            <Heading number={"01"} heading="Skills"/>
            <ul className=' grid grid-cols-3 gap-3 bg-neutral-900 md:w-2/4 
            text-sm text-center mt-20 p-5 rounded-md'>
              {skills.map((item) => (
                <li className='bg-neutral-800 rounded-md  py-1
                  text-white'  
                key={item.id}>
                  {item.name}
                </li>
              ))}
            </ul>
        </motion.div>
    </section>
  )
}

export default Skills