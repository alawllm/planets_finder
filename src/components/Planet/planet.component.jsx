const Planet = ({ name }) => {
    return (
        <div className={`${name}-outline`}>
            <div className={`${name} planet-child`}></div>
        </div>
    )
}

export default Planet;