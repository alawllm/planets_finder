const Planet = ({ name, onClick, dataName }) => {
    console.log(name)
    return (
        <div className={`${name}-outline`} onClick={onClick}  >
            <div className={`${name} planet-child`} data-name={dataName}></div>
        </div>
    )
}

export default Planet;