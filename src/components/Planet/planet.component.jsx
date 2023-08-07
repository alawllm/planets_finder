const Planet = ({ name }) => {
    return (
        <div className={`${name}-outline`}>
            <div className={`${name} planet-child`}></div>
        </div>
    )
}

export const PlanetStatic = ({ name }) => {
    return (
        <div className={`${name} planet-child`}></div>
    )
}

export default Planet;