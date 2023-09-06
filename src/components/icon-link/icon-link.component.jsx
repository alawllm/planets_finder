import './icon-link.styles.css'

const IconLink = ({ link, imageSrc, description, size, opacity }) => {
    return (
        <a href={link}>
            <img
                src={imageSrc}
                alt={description}
                className="icon-link-project-icon"
                border="0"
                style={{
                    height: `${size}px`,
                    width: `${size}px`,
                    opacity: `${opacity}`
                }}
            />
        </a >
    )
}

export default IconLink;