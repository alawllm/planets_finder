const Planet = ({ name, onClick, onMouseEnter, onMouseLeave, isHovered }) => {
    return (
        <div className={`${name}-outline`}
            onClick={onClick}>
            <div className={`${name} planet-child`}
                data-name={`${name}`}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {isHovered && <p className="planet-label">{name}</p>}
            </div>

        </div>
    )
}

export default Planet;