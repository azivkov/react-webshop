import './DetailedProductView.css'
import { images } from '../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { productData } from './productData'

function DetailedProductView({handleAddToCart}) {

    const urlParams = useParams();
    console.log("params:", urlParams.id);

    const defaultItem = {
        title: "No such item!",
        description: "This item doesn't exist"
    }

    const matchedItems = productData.filter(item => {
        return urlParams.id === item.id.toString()
    })

    console.log(matchedItems)

    const item = matchedItems[0] !== undefined ? matchedItems[0] : defaultItem
    
    return(
        <div className="product-detail-container">
            <div className="back">
                <Link to="/products"><FontAwesomeIcon icon={faArrowLeft} className="fa-solid fa-arrow-left" /> Natrag na popis proizvoda</Link>
            </div>

            <div className="container">
                <img src={item.image} alt={item.title} title={item.title} style={{width:"500px", padding:"2rem"}}/>
                <div className="details">
                    <h1 className="secondary-font main-text-color">{item.title}</h1>
                    <p className="main-font">{item.description} </p>
                    <p>
                        Cijena: {item.price} €
                    </p>

                    <form><button onClick={() => handleAddToCart(item)}>Dodaj u košaricu</button></form>
                </div>
            </div>
        </div>
    )
}

export {DetailedProductView}