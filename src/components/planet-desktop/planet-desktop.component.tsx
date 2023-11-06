type PlanetDesktopProps = {
  name: string;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const PlanetDesktop: React.FC<PlanetDesktopProps> = ({
  name,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div className={`${name}-outline`} onClick={onClick}>
      <div
        className={`${name} planet-child`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        data-testid={`planet-desktop-${name}`}></div>
    </div>
  );
};

export default PlanetDesktop;
