import { Link } from "react-router-dom"
import {images} from '../../assets/images.js'

function HomePopular({title, popularProducts, handleAddToCart}) {
    return(
        <div className={"popularno"}>
            <h2 className={"secondary-font main-text-color"}>{title}</h2>
            <ul className={"popproizv"}>
                {popularProducts.map((item, index) => (
                    <li key={index}><Link to={"/products/"+item.id}><img src={item.image} alt={item.title} title={item.title}/>
                        <h3 className={"secondary-font"}>{item.title}</h3>
                    </Link>
                    <p className={"main-font"}>{item.price} €</p>
                    <button onClick={() => handleAddToCart(item)}>Dodaj u košaricu</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export {HomePopular}