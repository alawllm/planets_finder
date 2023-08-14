const Planet = ({ name, onClick, onMouseEnter, onMouseLeave }) => {
    return (
        <div className={`${name}-outline`}
            onClick={onClick}>
            <div className={`${name} planet-child`}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
            </div>

        </div>
    )
}

export default Planet;