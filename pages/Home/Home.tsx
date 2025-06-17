import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import code from "./images/code.svg";
import education from "./images/education.svg";
import react from "./images/react.svg";
import { SelectedPage } from '../../shared/type';

const texts = [
  { title: "Front end developer", img: code },
  { title: "Computer Science Graduate", img: education },
  { title: "Bit of backend knowledge", img: react },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % texts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="e" className="relative overflow-hidden bg-black min-h-screen pt-10">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.E)}
        className="mt-40 md:mt-50 px-5 md:w-5/6 mx-auto"
      >
        <header className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Text */}
          <div className="flex flex-col gap-2 text-white">
            <h1 className='text-3xl font-bold font-mono'>Hi there👋</h1>
            <h2 className='text-3xl font-bold text-green-600'>I'm Edward Ogheneochuko</h2>
            <div className="text-2xl font-bold text-gray-400">
              <h1>I am a</h1>
              <div className="h-22 overflow-hidden relative text-white font-mono">
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
                      className="w-full flex items-center gap-3 "
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <img
                        src={texts[index].img}
                        alt={texts[index].title}
                        className="lg:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-green-500 shadow-lg"
                      />
                      <span className="capitalize drop-shadow-md">
                        {texts[index].title}
                      </span>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Image area */}
          <div className="w-full h-full aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://my.spline.design/awesomefolio-0c39efc3de701ba97be395cc128e4e2f/"
              className="w-full h-full"
              allowFullScreen
              title="Spline 3D Demo"
            />
          </div>
        </header>
      </motion.div>
    </section>
  );
}

export default Home;
