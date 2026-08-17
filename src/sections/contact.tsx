import { FaFacebook, FaLinkedin, FaViber } from 'react-icons/fa'; 

function Contact() {
    return (
        <section id="contact" className="section">
            <h2 className="contactitle">Contacts</h2>
            
            {/* Flex container keeps items neatly in a row */}
            <div className="contact-links">
                <a href="https://www.facebook.com/zyprhyz.yz/" target="_blank" rel="noreferrer" className="contactbut">
                    <FaFacebook size={20} color="#0866ff" />
                    <span>Facebook</span>
                </a>
                
                <a href="https://www.linkedin.com/in/zyphryz-gabriel-216655354" target="_blank" rel="noreferrer" className="contactbut">
                    <FaLinkedin size={20} color="#0a66c2" />
                    <span>LinkedIn</span>
                </a>
                
                <a href="viber://chat?number=yournumber" className="contactbut">
                    <FaViber size={20} color="#7360f2" />
                    <span>Viber</span>
                </a>
            </div>

            {/* Structured email section */}
            <div className="contact-email">
                <p>Or reach me via email:</p>
                <a href="mailto:gzyphryz@gmail.com" className="email-text">gzyphryz@gmail.com</a>
            </div>
        </section>
    );
}

export default Contact;