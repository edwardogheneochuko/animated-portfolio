
import { Close } from '@mui/icons-material'
import Link from './Link'
import { SelectedPage } from '../shared/type'


type Props = {
    isOpen: boolean
    isClose: () => void
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void
  }

  const MobileNav = ({isOpen, isClose, selectedPage, setSelectedPage}: 
    Props) => {
        const navOpen = isOpen ? "translate-x-0":"translate-x-[-100%]"

   return (
    <div>
      <div className={`fixed inset-0 transform transition-all ${navOpen} 
          duration-500 z-[60] bg-gray-700 opacity-70 w-full h-screen`} onClick={isClose}></div>
          <div className={` fixed justify-center ${navOpen}
       flex flex-col h-full transform transition-all duration-500
        delay-300 w-3/4 bg-rose-600 text-white gap-y-6 z-[60]`}>
                <div className='w-fit text-[20px] ml-12
                pb-1 sm:text-[30px] flex flex-col gap-y-5' onClick={isClose}>
                    <Link page='Skills' selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}  />
                    <Link page='Experiences' selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage} />
                    <Link page='Work' selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage} />
                    <Link page='Contact' selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage} />
                </div>
            <span onClick={isClose}>
        <Close className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 
        cursor-pointer'/>
        </span>
        </div>
    </div>
  )
}

export default MobileNav

