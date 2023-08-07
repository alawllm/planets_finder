export const PlanetStatic = ({ name }) => {
    return (
        <>
            <div className={`${name} planet-child`}></div>
            <p className="planet-text">{name}</p>
        </>
    )
}

const Planet = ({ name }) => {
    return (
        <div className={`${name}-outline`}>
            <div className={`${name} planet-child`}></div>
            <p className="planet-name">{name}</p>
        </div>
    )
}

export default Planet;