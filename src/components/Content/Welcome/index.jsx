
import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <section>
            <div>
                <div>
                    <h1>Hello, World!</h1>
                    <h2>It's a pleasure to meet you.</h2>
                </div>
                <div>
                    <div className='intro-bio'> My name is <br /> Kit Sutliff<br /><br />
                    Full Stack Developer <br /> Python / Javascript</div>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                </div>
            </div>
      </section>
    )
}

export default Welcome