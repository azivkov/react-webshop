import {images} from '../../assets/images.js'
import { Link } from 'react-router-dom'

function GamingCategories({title, gaming}) {
    return(
        <div className={"igre"}>
        <h2 className={"secondary-font main-text-color"}>{title}</h2>
        <ul>
            {gaming.map((item, index) => (
                <li key={index}><Link to="/categories">
                    <img src={images[item.img]} alt={item.title} title={item.title}/>
                    <h3 className={"secondary-font"}>{item.title}</h3>
                </Link></li>
            ))}
        </ul>
    </div>
    )
}

export {GamingCategories}