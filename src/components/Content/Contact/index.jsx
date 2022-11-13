
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
                <div >
                    <form onSubmit={onSubmit}>
                        <div>
                            <label className="form-label" htmlFor="name">
                                Name
                            </label>
                            <input className="form-control" type="text" id="name" required />
                        </div>
                        <div>
                            <label className="form-label" htmlFor="email">
                                Email
                            </label>
                            <input className="form-control" type="email" id="email" required />
                        </div>
                        <div>
                            <label className="form-label" htmlFor="message">
                                Message
                            </label>
                            <textarea className="form-control" id="message" required />
                        </div>
                        <button className="btn btn-danger" type="submit">
                            {formStatus}
                        </button>
                    </form>
                </div>
            </div>
        </section>

       
    )
}

export default Contact
