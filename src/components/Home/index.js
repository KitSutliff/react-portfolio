import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="hero-text-zone">
                <h1>Hello, World!</h1>
                <div className="hero-text-caption">It's a pleasure to meet you</div>
            </div>
            <div className="text-zone">
                <h2> My name is <br /> Kit Sutliff
                </h2>
                <h2> Full Stack Developer <br /> Python / Javascript</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <div className="section-heading">SECTION HEADING
            </div>
        </div>
    );
}

export default Home