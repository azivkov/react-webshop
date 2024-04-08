import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

function HeaderFirstRow({contactInfo, socialMedia}) {
    const { cart, user, setUser } = useContext(AppContext);

    function logoutUser() {
        localStorage.removeItem('user');
        setUser({});
        window.location.reload();
    }

    const loginInfo = user.username ? <span>Dobrodošli <b>{user.username}</b>! <span className="logout" onClick={() => logoutUser()}>Odjavi se?</span></span> : <Link to="/login">Prijavite se</Link>;

    return(
        <div className={"firstrow"}>
        <div className={"mail"}><Link to="mailto: cyber@shop.com" className={"mail"}>{contactInfo[0]}</Link></div>
        <div className={"tel"}><Link to="tel: 0912345678" className={"tel"}>{contactInfo[1]}</Link></div>
        <div className={"socmed"}>
            <ul className={"socialmedia"}>
                {socialMedia.map((item, index) => 
                    <li key={index}><Link to={`https://www.${item.title}.com`} target="_blank"><FontAwesomeIcon icon={item.icon} className={"fa-brands fa-"+item.title} alt={item.title} title={item.title} /></Link></li>
                )}
            </ul>
        </div>
        <div className={"search"}>
            <form>
                <input type="text" placeholder="Pretražite stranicu" name="search" className={"searchsite"} /> <button
                type="submit" className={"searchsite"}><FontAwesomeIcon icon={faSearch} className={"fa-solid fa-magnifying-glass search"} alt="pretraži" title="Traži" /></button>
            </form>
        </div>
        <div className={"login"}>
            {loginInfo}
        </div>
        <div className={"cart"}>
            <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} className={"fa-solid fa-cart-shopping cart position-relative"} alt="košarica" title="Košarica" />
            <span style={{color: "white"}}>{cart.length}</span></Link>
        </div>
    </div>
    )
}

export {HeaderFirstRow}