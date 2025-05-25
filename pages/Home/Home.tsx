<<<<<<< HEAD


import  { useEffect, useState } from 'react';
import {motion, AnimatePresence} from "framer-motion"
import button from "./images/button.svg"
import play from "./images/play.svg"
import ideas from "./images/ideas.svg"
import {useTypewriter, Cursor} from "react-simple-typewriter"
import Card from './Card';
import { SelectedPage } from '../../shared/type';


const texts = [
    { title: "goals", img: button },
    { title: "plans", img: play },
    { title: "ideas", img: ideas },
  ];

  type Props = {
    setSelectedPage: (value: SelectedPage) => void
  }

const Home = ({setSelectedPage}: Props) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setIndex((prev) => (prev + 1) % texts.length);
        }, 2500);
    
        return () => clearInterval(interval);
      }, []);

      const [text] = useTypewriter({
        words: [
          "maybe bunch of buttons",
          "often with a series of powerful ones",
        ],
        loop: true,
        delaySpeed: 2000,
      });


  return (
    <section id="e" className="relative overflow-hidden 
    bg-black min-h-screen pt-10">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.E)}
      className="mt-20 px-5 md:w-3/4 mx-auto ">
        <header className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
           {/* Left: Text */}
        <div className="flex flex-col gap-7">
            <div className="text-3xl font-bold text-gray-400">
              <h1>I turn</h1>

              <div className="h-12 overflow-hidden relative text-white font-mono">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={texts[index].title}
                    initial={{ y: 80, opacity: 0, rotateX: 90 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: -80, opacity: 0, rotateX: -90 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute w-full"
                    style={{ perspective: 1000 }}
                  >
                    <motion.div
                      whileHover={{ rotateY: 15, rotateX: 5, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 150 }}
                      className="w-full flex items-center gap-3"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <img
                        src={texts[index].img}
                        alt={texts[index].title}
                        className="lg:size-12 md:size-10 size-7 md:p-2 p-1 
                        rounded-full bg-green-500 shadow-lg"
                      />
                      <span className="capitalize drop-shadow-md">
                        {texts[index].title}
                      </span>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <h1>into reality</h1>
              <h1>__sometimes with a single click,</h1>
              <h1 className="text-red-300">
                {text}
                <Cursor />
              </h1>
            </div>

           
            <p className="text-white md:text-xl z-10">
              Hi, Je m'appelle Edward, I'm a front end developer with strong expertise in building modern,
              responsive web applications using React, Typescript, Next.js, and Tailwind css with other 
              tools
            </p>
          </div>
          {/*  Image area */}
          <div>
            <Card />
          </div>
        </header>
      </motion.div>
    </section>
  )
}

=======



import  { useEffect, useState } from 'react';
import {motion, AnimatePresence} from "framer-motion"
import button from "./images/button.svg"
import play from "./images/play.svg"
import ideas from "./images/ideas.svg"
import {useTypewriter, Cursor} from "react-simple-typewriter"
import Card from './Card';
import { SelectedPage } from '../../shared/type';


const texts = [
    { title: "goals", img: button },
    { title: "plans", img: play },
    { title: "ideas", img: ideas },
  ];

  type Props = {
    setSelectedPage: (value: SelectedPage) => void
  }

const Home = ({setSelectedPage}: Props) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setIndex((prev) => (prev + 1) % texts.length);
        }, 2500);
    
        return () => clearInterval(interval);
      }, []);

      const [text] = useTypewriter({
        words: [
          "maybe bunch of buttons",
          "often with a series of powerful ones",
        ],
        loop: true,
        delaySpeed: 2000,
      });


  return (
    <section id="e" className="relative overflow-hidden 
    bg-black min-h-screen pt-10">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.E)}
      className="mt-20 px-5 md:w-3/4 mx-auto ">
        <header className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
           {/* Left: Text */}
        <div className="flex flex-col gap-7">
            <div className="text-3xl font-bold text-gray-400">
              <h1>I turn</h1>

              <div className="h-12 overflow-hidden relative text-white font-mono">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={texts[index].title}
                    initial={{ y: 80, opacity: 0, rotateX: 90 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: -80, opacity: 0, rotateX: -90 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute w-full"
                    style={{ perspective: 1000 }}
                  >
                    <motion.div
                      whileHover={{ rotateY: 15, rotateX: 5, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 150 }}
                      className="w-full flex items-center gap-3"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <img
                        src={texts[index].img}
                        alt={texts[index].title}
                        className="lg:size-12 md:size-10 size-7 md:p-2 p-1 
                        rounded-full bg-green-500 shadow-lg"
                      />
                      <span className="capitalize drop-shadow-md">
                        {texts[index].title}
                      </span>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <h1>into reality</h1>
              <h1>__sometimes with a single click,</h1>
              <h1 className="text-red-300">
                {text}
                <Cursor />
              </h1>
            </div>

           
            <p className="text-white md:text-xl z-10">
              Hi, Je m'appelle Edward, I'm a front end developer with strong expertise in building modern,
              responsive web applications using React, Typescript, Next.js, and Tailwind css with other 
              tools
            </p>
          </div>
          {/*  Image area */}
          <div>
            <Card />
          </div>
        </header>
      </motion.div>
    </section>
  )
}

>>>>>>> 8b94bce (initial commit)
export default Home