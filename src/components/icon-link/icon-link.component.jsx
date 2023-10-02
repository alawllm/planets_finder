import "./icon-link.styles.css";

const IconLink = ({ link, imageSrc, description, size, opacity, name }) => {
  return (
    <a href={link}>
      <img
        alt={description}
        border="0"
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
