<<<<<<< HEAD


import { useEffect, useState } from "react"


const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        const media = window.matchMedia(query)
        if (media.matches !== matches){
            setMatches(media.matches)
        }
        const listener = () => setMatches(media.matches)
        window.addEventListener("resize", listener)
        return () => window.removeEventListener("resize", listener)
    }, [matches, query])

    return matches
}

=======


import { useEffect, useState } from "react"


const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        const media = window.matchMedia(query)
        if (media.matches !== matches){
            setMatches(media.matches)
        }
        const listener = () => setMatches(media.matches)
        window.addEventListener("resize", listener)
        return () => window.removeEventListener("resize", listener)
    }, [matches, query])

    return matches
}

>>>>>>> 8b94bce (initial commit)
export default useMediaQuery