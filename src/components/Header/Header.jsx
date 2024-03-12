import './Header.css'
import { Link } from 'react-router-dom';
import { HeaderFirstRow } from './HeaderFirstRow';
import { HeaderSecondRow } from './HeaderSecondRow';
import { faFacebook, faInstagram, faTwitter, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';


function Header() {

    const contactInfo = ["cyber@shop.com", "091/234-5678"];
    const socialMedia = [
        {title: "facebook", icon: faFacebook},
        {title: "instagram", icon: faInstagram},
        {title: "twitter", icon: faTwitter},
        {title: "tiktok", icon: faTiktok},
        {title: "youtube", icon: faYoutube},
    ];

    const navigation = [
        {link: "/", title: "Naslovna"},
        {link:"/categories", title:"Kategorije"},
        {link:"/products", title:"Proizvodi"},
        {link:"/about", title:"O nama"},
        {link:"/blog", title:"Blog"},
        {link:"/contact", title:"Kontakt"}
    ];

    return(
        <section className={"wholeheader"}>
            <HeaderFirstRow contactInfo={contactInfo} socialMedia={socialMedia}/>
            <HeaderSecondRow navigation={navigation} />
        </section>
    )
}

export {Header}
