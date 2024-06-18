import { useEffect } from 'react'
import "../css/home.css"

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