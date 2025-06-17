import { SelectedPage } from '../../shared/type'
import { motion } from 'framer-motion'
import Heading from '../../shared/Heading'
import { skills } from "../../data/data"
import Avatar from "../../imgs/Avatar.jpg"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Skills = ({ setSelectedPage }: Props) => {
  return (
    <section
      id='skills'
      className='text-white md:w-5/6 mt-10 mx-auto px-5'
    >
      <Heading number={"01"} heading="Skills" />
      <motion.div
        className='lg:grid lg:grid-cols-2 mt-16 gap-10 items-center'
        onViewportEnter={() => setSelectedPage(SelectedPage.Skills)}
      >
        {/* Text + Skills */}
        <div className='order-2 lg:order-1 mb-10 space-y-5'>
          <p className='mb-6 leading-relaxed text-gray-300 '>
            Hello, my name is <span className='text-amber-400 font-semibold'>Edward Ogheneochuko</span>.
            I’m a frontend developer with strong skills in modern web technologies,
            including JavaScript and TypeScript, and frameworks like React.
            I specialize in building responsive, user-friendly interfaces and enjoy
            working with tools like Tailwind CSS for clean UI, and Axios for efficient API communication.
            I'm open-minded, collaborative, and always eager to learn new technologies.
            Feel free to explore my portfolio to see some of the projects I’ve worked on.
          </p>

          <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
            {skills.map((item) => (
              <motion.li
                key={item.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-neutral-700 py-2 text-center rounded-md shadow-md hover:bg-neutral-600 transition"
              >
                {item.name}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Avatar */}
        <div className='order-1 lg:order-2 flex justify-center'>
          <img
            src={Avatar}
            alt="Edward Ogheneochuko"
            className='rounded-full w-3/4 max-w-sm mb-10 lg:mb-0'
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
