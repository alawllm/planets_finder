import Planet from "../Planet/planet.component";


const SolarSystem = () => {
    return (
        <>
            <div className="container">
                <Planet name="Saturn" />
                <Planet name="Pluto" />
                <Planet name="Mars" />
            </div>
        </>
    )
}

export default SolarSystem;