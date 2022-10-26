import { Link, NavLink } from 'react-router-dom'
import'./index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faSuitcase, faBars, faClose } from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => (
    <div className='new-nav-bar'>
        <nav>
            <NavLink exact= "true" activeclassname= "active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact= "true" activeclassname= "active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#A1B1D0" opacity=".4"/>
            </NavLink>
            <NavLink exact= "true" activeclassname= "active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#A1B1D0" opacity=".4"/>
            </NavLink>
            <a 
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/kit-sutliff/"
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#A1B1D0" opacity=".4"/>
            </a>
            <a 
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/KitSutliff"
                >
                    <FontAwesomeIcon icon={faGithub} color="#A1B1D0" opacity=".4"/>
            </a>
        </nav>
    </div>
)

export default Sidebar