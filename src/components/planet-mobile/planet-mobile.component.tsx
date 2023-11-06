type PlanetMobileProps = {
  name: string;
  onClick: () => void;
};

const PlanetMobile: React.FC<PlanetMobileProps> = ({ name, onClick }) => {
  return (
    <>
      <div
        className={`${name} planet-child`}
        onClick={onClick}
        data-testid={`planet-mobile-${name}`}></div>
      <p className="planet-text">{name}</p>
    </>
  );
};

export default PlanetMobile;
