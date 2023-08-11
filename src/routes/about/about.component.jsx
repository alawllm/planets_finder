import './about.styles.css'

const About = () => {
    return (
        <>
            <div className="about-content-container">
                <h1 className="header-type">Hello there!</h1>
                <p>I am Ala. Frontend Developer, ex-architect.</p>
                <p>Stack: React | Redux | JavaScript | CSS </p>
                <p>Find me on:</p>
                <div className="links-container">
                    <a className="about-link" href="https://github.com/alawllm">GitHub</a>
                    <a className="about-link" href="https://www.linkedin.com/in/alicja-willam-19b43bb9/">LinkedIn</a>
                </div>
            </div>
        </>
    )
}

export default About;