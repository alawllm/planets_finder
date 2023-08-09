export const PlanetStatic = ({ name, onClick }) => {
    return (
        <>
            <div className={`${name} planet-child`} onClick={onClick}></div>
            <p className="planet-text">{name}</p>
        </>
    )
}

export default PlanetStatic;