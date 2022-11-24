import GameIntro from '../../../assets/images/GameIntro.png';
import GameAction from '../../../assets/images/GameAction.png';


const Personal = () => {
    return (
        <section>
            <div className="section-container">
                <div className="container-headings">
                    <div className="section-heading">Personal</div>
                    <div className="heading-underline"></div>
                    <div className="section-subheading">Pygame</div>
                </div>
                <div className="container-section-content">
                    <div className="left-to-bottom">
                        <div>
                            <h3>"Welcome to the Jungle"</h3>
                            <p> Retro-style pixel art game built in <span className="bold">Python</span> to entertain and impress people like <span className="bold">you</span>.
                            </p>
                            <p >Design showcases <span className="bold">efficient</span> use of creative assets and <span className="bold">clean code</span> to maximum effect.</p>
                        </div>
                    </div>
                    <div className="right-to-top">
                        <div >
                            <img src={GameIntro} alt="billing page image">
                            </img>
                        </div>
                    </div>
                </div>
                <div className="container-section-content">
                    <div className="left-to-bottom">
                        <div>

                            <p >This project is being developed using <span className="bold">Pygame</span> so that the ultimate product will be able to showcase my <span className="bold">profficiency</span> with Python.</p>
                        </div>
                    </div>
                    <div className="right-to-top">
                        <div >
                            <img src={GameAction} alt="billing page image">
                            </img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Personal