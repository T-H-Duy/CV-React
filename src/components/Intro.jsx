function Intro() {
    return(
        <div className="contenair-fluid text-center bg-image d-flex flex-column justify-content-center" id="header">
            <h1 className="text-white">Bonjour, je suis John Doe</h1>
            <h2 className="text-white">Développeur web full stack</h2>
            <btn><a href="#about" className="btn btn-primary text-white text-decoration-none">En savoir plus</a></btn>
        </div>
    )
}

export default Intro