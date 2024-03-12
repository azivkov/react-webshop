import {images} from '../../assets/images.js'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';

function ContactInfo({contact, socialMedia}) {

    return(
        <div className="contact">
            <img src={images.contact} alt="CyberShop" title="CyberShop" />
            {contact.map((item, index) => (
                <p key={index}><span>{item.type}</span>{item.info}</p>
            ))}

            <ul className="contactsocial">
            {socialMedia.map((item, index) => 
                    <li key={index}><Link to={`https://www.${item.title}.com`} target="_blank"><FontAwesomeIcon icon={item.icon} className={"fa-brands fa-"+item.title} alt={item.title} title={item.title} /></Link></li>
                )}
            </ul>
        </div>
    )
}

export {ContactInfo}