<<<<<<< HEAD



import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "../shared/type"

type Props = {
    page: string
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void
}

const Link = ({page,selectedPage,setSelectedPage}:Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage

  return (
    <AnchorLink 
    className={`${selectedPage === lowerCasePage ? "text-amber-300" : ""}
     transition duration-500 hover:text-amber-400
    `} href={`#${lowerCasePage}`} onClick={() => setSelectedPage(lowerCasePage)}
    >
        {page}
    </AnchorLink>
  )
}

=======



import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "../shared/type"

type Props = {
    page: string
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void
}

const Link = ({page,selectedPage,setSelectedPage}:Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage

  return (
    <AnchorLink 
    className={`${selectedPage === lowerCasePage ? "text-amber-300" : ""}
     transition duration-500 hover:text-amber-400
    `} href={`#${lowerCasePage}`} onClick={() => setSelectedPage(lowerCasePage)}
    >
        {page}
    </AnchorLink>
  )
}

>>>>>>> 8b94bce (initial commit)
export default Link