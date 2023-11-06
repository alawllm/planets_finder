import IconLink from "../../components/icon-link/icon-link.component";

import "./about-me.styles.css";

const About: React.FC = () => {
  return (
    <>
      <div className="about-content-container">
        <h1 className="header-type">Hello there!</h1>
        <p className="about-paragraph">
          I am Ala. Frontend Developer, ex-architect.
        </p>
        <p className="about-paragraph">
          Stack: React | Typescript | JavaScript | CSS | TailwindCSS
        </p>
        <p className="about-paragraph">Find me on:</p>
        <div className="links-container">
          <IconLink
            link="https://www.linkedin.com/in/alicja-willam-19b43bb9/"
            imageSrc="https://i.ibb.co/sjwmx3R/icons8-linkedin-100.png"
            description={"linkedin-logo"}
            size={90}
            opacity={1.0}
            name="linkedin"
          />

          <IconLink
            link="https://github.com/alawllm"
            imageSrc="https://i.ibb.co/fYsDJb6/icons8-github-100.png"
            description={"github-logo"}
            size={90}
            opacity={1.0}
            name="github"
          />
          {/* icons by icons8.com */}
        </div>
      </div>
    </>
  );
};

export default About;
