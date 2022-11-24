import Python from '../../../assets/images/Python.png';
import CSS from '../../../assets/images/CSS.png';
import HTML from '../../../assets/images/HTML.png';
import Javascript from '../../../assets/images/Javascript.png';
import React from '../../../assets/images/React.png';

const BonaFides = () => {
    return (
        <section>
            <div className="section-container">
                <div className="container-headings"> 
                    <div className="section-heading">Bona Fides</div>
                    <div className="heading-underline"></div>
                    <div className="section-subheading">Kit Sutliff</div>
                </div>
                <div className="container-section-content">
                    <div className="left-to-bottom">
                        <div>
                            <p> Thrives solving<span className="bold"> complex</span> and <span className="bold">ambiguous</span> challenges.
                            </p>
                            <p >Enjoys <span className="bold">Star Trek</span> and <span className="bold">Lego</span>.</p>
                        </div>
                    </div>
                    <div className="right-to-top">
                        <div className="container-links">
                            <a
                            rel="noreferrer"
                                href="https://www.linkedin.com/in/kit-sutliff/">
                                LinkedIn
                            </a> 
                            <a
                            rel="noreferrer"
                                href="https://github.com/KitSutliff">
                                GitHub
                            </a>
                            <a
                            rel="noreferrer"
                                href="https://github.com/KitSutliff/Resume/blob/main/resume.md">
                                Resume
                            </a>  
                        </div>
                    </div> 
                </div>
                <div className="container-skills"> 
                    <h2>Skills</h2>
                    <div className="container-skills-icons">
                        <div className="skill-icon">
                            <img src={Python} alt="Python logo">
                            </img>
                            Python
                        </div> 
                        <div className="skill-icon">
                            <img src={HTML} alt="HTML logo">
                            </img>
                            HTML
                        </div> 
                        <div className="skill-icon">
                            <img src={CSS} alt="CSS logo">
                            </img>
                            CSS
                        </div> 
                        <div className="skill-icon">
                            <img src={Javascript} alt="Javascript logo">
                            </img>Javascript
                            {/* fix icons */}
                        </div> 
                        <div className="skill-icon">
                            <img src={React} alt="React logo">
                            </img>
                            React
                        </div> 
                    </div>
                </div>
            </div>
        </section>

    )
}

export default BonaFides