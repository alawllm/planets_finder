const PlanetDesktop = ({ name, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <div className={`${name}-outline`} onClick={onClick}>
      <div
        className={`${name} planet-child`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        data-testid='planet-desktop'></div>
    </div>
  );
};

export default PlanetDesktop;