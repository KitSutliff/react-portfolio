
import React from 'react'
const Contact = () => {
    const [formStatus, setFormStatus] = React.useState('Send')
    // SOLUTION 2 COMPONENT
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const { name, email, message } = e.target.elements
        let conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(conFom)

        // ADD EMAIL SUBMISSION COMPONENT HERE

    }
    return (
        <section>
            <div className="container-contact-section" >
                <div class="container-contact-heading" id="contact">
                    Contact
                </div>
                <div className="container-contact-form">
                    <form onSubmit={onSubmit}>
                        <div className="form-element">
                            <label className="form-label" htmlFor="name">
                                Name 
                            </label>
                            <input className="form-control" type="text" id="name" required />
                        </div>
                        <div className='form-element'> 
                            <label className="form-label" htmlFor="email">
                                Email
                            </label>
                            <input className="form-control" type="email" id="email" required />
                        </div>
                        <div className="form-element">
                            <label className="form-label" htmlFor="message">
                                Message
                            </label>
                            <textarea className="form-control" id="message" required />
                        </div>
                        <div className= "form-element">
                            <button type="submit">
                                {formStatus}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

       
    )
}

export default Contact
