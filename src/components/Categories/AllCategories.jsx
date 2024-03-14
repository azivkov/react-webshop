import {images} from '../../assets/images.js'
import { Link } from 'react-router-dom'

function AllCategories({allCategories}) {
    return(
        <div className={"kategorije"}>
                <ul>
                    {allCategories.map((item, index) => (
                        <li key={index}><Link to="/categories">
                            <img src={images[item.image]} alt={item.title} title={item.title}/>
                            <h3 className="secondary-font">{item.title}</h3>
                            </Link></li>
                    ))}
                </ul>
            </div>
    )
}

export {AllCategories}