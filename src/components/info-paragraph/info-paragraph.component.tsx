import "./info-paragraph.styles.css";

type InfoParagraphProps = {
  label: string;
  content: string;
};

const InfoParagraph: React.FC<InfoParagraphProps> = ({ label, content }) => {
  return (
    <>
      <p className="info-text">{label}</p>
      <p className="bigger-info-text">{content}</p>
    </>
  );
};

export default InfoParagraph;
