<<<<<<< HEAD


import { SelectedPage } from '../../shared/type'
import { motion } from 'framer-motion'
import Heading from '../../shared/Heading'
import { works } from '../../data/data'


type Props = {
    setSelectedPage: (value: SelectedPage) => void
}


const Works = ({setSelectedPage}:Props) => {
  return (
    <section id='work' className='text-white md:w-5/6 mt-36 mx-auto px-5'>
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Work)}>
            <Heading number="03" heading="Works" />
        </motion.div>
        <div className='text-center '>
            {works.map((item) => (
                <div key={item.id} className='space-y-3'>
                    <img src={item.image} alt="_images" 
                    className='mt-5 rounded-sm shadow-lg shadow-gray-300'/>
                    <h4 className='text-gray-400 font-semibold'>
                        {item.implementation}
                    </h4>
                </div>
            ))}
        </div>
    </section>
  )
}

=======


import { SelectedPage } from '../../shared/type'
import { motion } from 'framer-motion'
import Heading from '../../shared/Heading'
import { works } from '../../data/data'


type Props = {
    setSelectedPage: (value: SelectedPage) => void
}


const Works = ({setSelectedPage}:Props) => {
  return (
    <section id='work' className='text-white md:w-5/6 mt-36 mx-auto px-5'>
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Work)}>
            <Heading number="03" heading="Works" />
        </motion.div>
        <div className='text-center '>
            {works.map((item) => (
                <div key={item.id} className='space-y-3'>
                    <img src={item.image} alt="_images" 
                    className='mt-5 rounded-sm shadow-lg shadow-gray-300'/>
                    <h4 className='text-gray-400 font-semibold'>
                        {item.implementation}
                    </h4>
                </div>
            ))}
        </div>
    </section>
  )
}

>>>>>>> 8b94bce (initial commit)
export default Works