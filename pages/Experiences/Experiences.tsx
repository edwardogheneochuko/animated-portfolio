

import { useState } from 'react'
import { SelectedPage } from '../../shared/type'
import { motion } from 'framer-motion'
import Heading from '../../shared/Heading'
import { experiences } from '../../data/data'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}


const Experiences = ({setSelectedPage}:Props) => {
    const [activeTab, setActiveTab] = useState(experiences[0]?.id || "");

  return (
    <section id='experiences' className='text-white md:w-5/6 mt-46 mx-auto px-5'>
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Experiences)}>
            <Heading number="02" heading="Experiences" />
            <div className='flex flex-col md:flex-row mt-20'>
            <div className="flex flex-row md:flex-col mx-auto
                border-b md:border-b-0 md:border-r">
                    {experiences.map((item) => (
                        <button key={item.id} onClick={() => setActiveTab(item.id)}
                           className={`px-4 py-2 text-sm md:text-lg font-medium transition-colors 
                                cursor-pointer
                                ${activeTab === item.id
                                    ? "border-b-2 md:border-b-0 md:border-r-2 bg-gray-900 rounded-md border-amber-400 text-white"
                                    : "text-gray-500 hover:text-gray-700"
                                }`} >
                                    {item.name}
                        </button>
                    ))}
                </div>
                {/* Content Section */}
                <div className='mt-4 md:mt-0 md:ml-4 '>
                    {experiences.map((item) => 
                    activeTab === item.id && (
                        <div key={item.id} className='p-4'>
                            <div>
                                <p className='text-lg font-medium'>{item.description}</p>
                                {item.time && (
                                    <p className='text-amber-300 text-sm'>{item.time}</p>
                                )}
                            </div>
                            {item.story && (
                                <div className="text-sm md:text-md text-gray-400 pt-5 md:pl-7 text-justify font-mono">
                                    {item.story.map((point, index) => (
                                        <p key={index}>
                                            <span className='text-green-400'>{"> "}</span>
                                            {point}
                                        </p>
                                    ))}
                                </div>
                            )}
                        </div>
                    )
                    )}
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Experiences