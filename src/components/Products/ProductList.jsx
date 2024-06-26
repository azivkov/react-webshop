import { Link, useSearchParams } from "react-router-dom"
import { images } from "../../assets/images"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward, faBackward } from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

function ProductList({productData, matchedProducts, objectParams}) {
    const { handleAddToCart } = useContext(AppContext);
    const listOfProducts = Object.keys(objectParams).length !== 0 ? matchedProducts : productData;

    return(
        <div className="products">
                <ul>
                    {listOfProducts.map((item, index) => (
                        <li key={index}>
                            <Link to={"/products/"+item.id}>
                                <img src={item.image} alt={item.title} title={item.title} />
                                <h3 className="secondary-font">{item.title}</h3>
                            </Link>
                            <p className="main-font">{item.price} €</p>
                            <button onClick={() => handleAddToCart(item)}>Dodaj u košaricu</button>
                        </li>
                    ))}
                </ul>
            <section className="nextpage">
                <div data-status="disabled"><FontAwesomeIcon icon={faBackward} className="fa-solid fa-backward" /></div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div><FontAwesomeIcon icon={faForward} className="fa-solid fa-forward" /></div>
            </section>
        </div>
    )
    
}

export {ProductList}