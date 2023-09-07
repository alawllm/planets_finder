import './info-paragraph.styles.css'

const InfoParagraph = ({ label, content }) => {
  return (
    <>
      <p className="info-text">{label}</p>
      <p className="bigger-info-text">{content}</p>
    </>
  );
};

export default InfoParagraph;
