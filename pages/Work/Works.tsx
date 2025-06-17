import { SelectedPage } from '../../shared/type'
import { motion } from 'framer-motion'
import Heading from '../../shared/Heading'
import { works } from '../../data/data'
import { GitHub } from '@mui/icons-material'

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Works = ({ setSelectedPage }: Props) => {
  return (
    <section id='work' className='text-white md:w-5/6 mt-36 mx-auto px-5'>
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Work)}>
        <Heading number="03" heading="Works" />
      </motion.div>

      <div className='text-center mt-10 space-y-10'>
        {works.map((item) => (
          <div
            key={item.id}
            className='relative group w-full max-w-xl mx-auto overflow-hidden rounded-lg shadow-lg'
          >
            <img
              src={item.image}
              alt="project preview"
              className='w-full h-auto object-cover transform duration-300 group-hover:brightness-50'
            />

            <motion.a
              href={item.links}
              target='_blank'
              rel='noopener noreferrer'
              initial={{ y: 100, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className='absolute inset-0 flex items-center justify-center'
            >
              <GitHub
                fontSize='larger'
                className='text-white text-[4rem]  bg-opacity-60 p-3 rounded-full hover:bg-opacity-80 transition-all duration-300'
              />
            </motion.a>

            {/* Description */}
            <div className='mt-3 space-y-1'>
              <h4 className='text-gray-400 font-semibold'>{item.implementation}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Works
