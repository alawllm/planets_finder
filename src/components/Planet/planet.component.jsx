const Planet = ({ name, onClick }) => {
    return (
        <div className={`${name}-outline`} onClick={onClick}  >
            <div className={`${name} planet-child`} data-name={`${name}`}></div>
        </div>
    )
}

export default Planet;