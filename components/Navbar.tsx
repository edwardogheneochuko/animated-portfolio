

import { Menu } from "@mui/icons-material"
import Link from "./Link"
import { SelectedPage } from '../shared/type'
import useMediaQuery from "../hooks/useMediaQuery"

type Props = {
    isOpen: () => void
    isTopOfPage : boolean
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage, isOpen}:
     Props) => {

    const flexBetween = "flex items-center justify-between"
    const isAboveMediumsScreens = useMediaQuery("(min-width:1060px)")
    const navbarBackground = isTopOfPage ? " " : "bg-neutral-900  text-white drop-shadow"

  return (
    <nav>
        <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 
        w-full py-6`}>
          <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full gap-16`}>
            <div className='border border-3 border-white px-4 py-2 
            rounded-3xl text-2xl font-bold text-white'>
                <Link page='E' 
                selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            </div>
            {isAboveMediumsScreens ? (
                <div className={`${flexBetween} gap-8 text-sm text-white`}>
                    <Link page='Skills' selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage} />
                    <Link page='Experiences' selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage} />
                    <Link page='Work' selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage} />
                    <Link page='Contact' selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage} />
                </div>
            ): (
                <button className="rounded-full p-2 text-white" onClick={isOpen}>
                    <Menu />
                </button>
            )}
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Navbar