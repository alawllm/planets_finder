const InfoParagraph = ({ label, content }) => {
    return (
        <>
            <p className="info-text">{label}</p>
            <p className="smaller-info-text">{content}</p>
        </>
    )

}

export default InfoParagraph;