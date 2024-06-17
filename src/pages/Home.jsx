import { useEffect } from 'react'

import Intro from "../components/Intro"
import About from "../components/About"

export default function Home() {
    useEffect(() => {
        document.title = "Portfolio - John Doe"
    })

    return(
        <div>
            <Intro/>
            <About/>
        </div>
    )
}