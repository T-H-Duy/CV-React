import { useEffect } from "react"

import AccomplishmentModal from "../components/AccomplishmentModal"

export default function AccomplishmentPages () {
    useEffect(() => {
        document.title = "Mes réallisations - John Doe"
    })

    return (
        <div>
            <div className="container-fluid banner"></div>
            <div className="container text-center">
                <h2 className="text-uppercase">Portfolio</h2>
                <p>Voici quelques-unes de mes réalisations</p>
                <div className='border-bottom w-25 m-auto border-3' style={{"--bs-border-color": "#0d6efd"}}></div>

                <div className="my-3">
                    <AccomplishmentModal/>
                </div>
            </div>
        </div>
    )
}