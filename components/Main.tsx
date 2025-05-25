<<<<<<< HEAD


import  { useState, useEffect } from 'react'
import Navbar from './Navbar'
import MobileNav from './MobileNav'
import { SelectedPage } from '../shared/type'

//pages

import Home from '../pages/Home/Home'
import About from '../pages/Skills/Skills'
import Experiences from '../pages/Experiences/Experiences'
import Works from '../pages/Work/Works'
import Contact from '../pages/Contact/Contact'

const Main = () => {
  
    const [toggleNav, setToggleNav] = useState(false)
    const navOpen = () => setToggleNav(true)
    const navClose = () => setToggleNav(false)

    const [selectedPage, setSelectedPage] = useState<SelectedPage>(
      SelectedPage.E
  )
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0){
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.E)
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
  window.addEventListener("scroll", handleScroll)
  return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div>
        <Navbar  isOpen={navOpen} isTopOfPage={isTopOfPage} 
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage}  />
        <MobileNav isOpen={toggleNav} isClose={navClose}
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage}/>
        <Home setSelectedPage={setSelectedPage} />
        <About setSelectedPage={setSelectedPage} />
        <Experiences setSelectedPage={setSelectedPage} />
        <Works setSelectedPage={setSelectedPage} />
        <Contact setSelectedPage={setSelectedPage} />
    </div>
  )
}

=======


import  { useState, useEffect } from 'react'
import Navbar from './Navbar'
import MobileNav from './MobileNav'
import { SelectedPage } from '../shared/type'

//pages

import Home from '../pages/Home/Home'
import About from '../pages/Skills/Skills'
import Experiences from '../pages/Experiences/Experiences'
import Works from '../pages/Work/Works'
import Contact from '../pages/Contact/Contact'

const Main = () => {
  
    const [toggleNav, setToggleNav] = useState(false)
    const navOpen = () => setToggleNav(true)
    const navClose = () => setToggleNav(false)

    const [selectedPage, setSelectedPage] = useState<SelectedPage>(
      SelectedPage.E
  )
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0){
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.E)
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
  window.addEventListener("scroll", handleScroll)
  return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div>
        <Navbar  isOpen={navOpen} isTopOfPage={isTopOfPage} 
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage}  />
        <MobileNav isOpen={toggleNav} isClose={navClose}
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage}/>
        <Home setSelectedPage={setSelectedPage} />
        <About setSelectedPage={setSelectedPage} />
        <Experiences setSelectedPage={setSelectedPage} />
        <Works setSelectedPage={setSelectedPage} />
        <Contact setSelectedPage={setSelectedPage} />
    </div>
  )
}

>>>>>>> 8b94bce (initial commit)
export default Main