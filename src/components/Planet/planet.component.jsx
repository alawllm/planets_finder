export const PlanetStatic = ({ name, onClick }) => {
    return (
        <>
            <div className={`${name} planet-child`} onClick={onClick}></div>
            <p className="planet-text">{name}</p>
        </>
    )
}

const Planet = ({ name, onClick }) => {
    return (
        <div className={`${name}-outline`} onClick={onClick}>
            <div className={`${name} planet-child`}></div>
        </div>
    )
}

export default Planet;