import './Contact.css'
import { ContactForm } from './ContactForm.jsx';
import { ContactInfo } from './ContactInfo.jsx';
import { faFacebook, faInstagram, faTwitter, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Contact({title}) {
    const contact = [
        {type: "Mobitel: ", info: "091-234/5678"},
        {type: "Telefon: ", info: "01/111-1111"},
        {type: "OIB: ", info: "1234567890"},
        {type: "Adresa: ", info: "Cyber Shop, Šibenik"},
        {type:"E-mail: ", info: "cyber@shop.com"}
    ]

    const socialMedia = [
        {title: "facebook", icon: faFacebook},
        {title: "instagram", icon: faInstagram},
        {title: "twitter", icon: faTwitter},
        {title: "tiktok", icon: faTiktok},
        {title: "youtube", icon: faYoutube},
    ];

    return (
        <main>
            <h1 className="main-text-color">{title}</h1>
            <div className="contact-container">
                <ContactForm />
                <ContactInfo socialMedia={socialMedia} contact={contact}/>
                
            </div>
        </main>
    );
}

export { Contact };
