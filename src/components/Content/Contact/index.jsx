
import React, { useRef} from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formStatus, setFormStatus] = React.useState('Send')
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm( process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
        .then((result) => {
            setFormStatus("Submitted")
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <section>
            <div className="container-contact-section" >
                <div className="container-contact-heading" id="contact">
                    Contact
                </div>
                <div className="container-contact-form">
                    <form onSubmit={sendEmail} ref= {form}>
                        <div className="form-element">
                            <label className="form-label" htmlFor="name">
                                Name 
                            </label>
                            <input className="form-control" type="text" name="name" required />
                        </div>
                        <div className='form-element'> 
                            <label className="form-label" htmlFor="email">
                                Email
                            </label>
                            <input className="form-control" type="email" name="email" required />
                        </div>
                        <div className="form-element">
                            <label className="form-label" htmlFor="message">
                                Message
                            </label>
                            <textarea className="form-control" id="message" name="message" required />
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
