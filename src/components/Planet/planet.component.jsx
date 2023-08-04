const Planet = ({ name, sizeOutline, size, color, left, top, orbitAnimation }) => {
    return (
        <div className={`${name}-outline`}
            style={{ height: sizeOutline, width: sizeOutline }}>
            <div className={`${name} planet-child`}
                style={{
                    height: size,
                    width: size,
                    background: color,
                    left: left,
                    top: top,
                    animation: orbitAnimation
                }}></div>
        </div>
    )
}

export default Planet;