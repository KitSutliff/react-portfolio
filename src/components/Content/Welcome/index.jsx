
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
                    <div className='intro-bio'> My name is <br />
                        <span className="bold">
                            Kit Sutliff
                        </span>
                        <br /><br />
                        Full Stack Developer <br />  <span className="bold">
                            Python / Javascript
                        </span>
                    </div>
                    <div className="centered">
                        <button
                            onClick={() =>
                                document
                                .getElementById("contact")
                                .scrollIntoView({ behavior: "smooth" })
                            }
                            className="flat-button"
                            >
                                CONTACT ME
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Welcome