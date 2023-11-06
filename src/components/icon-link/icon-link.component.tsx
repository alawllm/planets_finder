import "./icon-link.styles.css";

type IconLinkProps = {
  link: string;
  imageSrc: string;
  description: string;
  size: number;
  opacity: number;
  name: string;
};

const IconLink: React.FC<IconLinkProps> = ({
  link,
  imageSrc,
  description,
  size,
  opacity,
  name,
}) => {
  return (
    <a href={link}>
      <img
        alt={description}
        data-testid={`${name}-link`}
        className="icon-link-project-icon"
        src={imageSrc}
        style={{
          height: `${size}px`,
          width: `${size}px`,
          opacity: `${opacity}`,
        }}
      />
    </a>
  );
};

export default IconLink;
