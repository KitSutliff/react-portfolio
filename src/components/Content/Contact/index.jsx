
import React, { useRef} from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formStatus, setFormStatus] = React.useState('Send')
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <section>
            <div className="container-contact-section" >
                <div class="container-contact-heading" id="contact">
                    Contact
                </div>
                <div className="container-contact-form">
                    <form onSubmit={sendEmail} ref= {form}>
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
