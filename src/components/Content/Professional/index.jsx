import QumuloBillingScreen from '../../../assets/images/QumuloBiller.png';

const Professional = () => {
    return (
        <section>
            <div className="section-container">
                <div className="container-headings">
                    <div className="section-heading">Professional</div>
                    <div className="heading-underline"></div>
                    <div className="section-subheading">Qumulo</div>
                </div>
                <div className="container-section-content">
                    <div className="left-to-bottom">
                        <div>
                            <h3>Azure Biller</h3>
                            <p>Rebuilt <span className="bold">point-of-sale</span> for all 
    Qumulo cloud services offered through <span className="bold">Microsoft Azure Marketplace</span>. 
                            </p>
                        </div>
                    </div>
                    <div className="right-to-top">
                        <div>
                            <img src={QumuloBillingScreen} alt="billing page image">
                            </img>
                        </div>
                    </div>
                </div>
                <div className="container-section-content">
                    <div className="left-to-bottom">
                        <div>
                            <h3>Cluster Automator</h3>
                            <p>Peered <span className= "bold">Azure</span> and <span className= "bold">AWS</span>, enabling automatic 
provisioning and deprovisioning of <span className= "bold">Customer Cloud Clusters</span>.
                            </p>
                        </div>
                    </div>
                    <div className="right-to-top">
                        <div className="confidential-box"> CONFIDENTIAL
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Professional