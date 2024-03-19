import { Link, useSearchParams } from "react-router-dom"
import { images } from "../../assets/images"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward, faBackward } from '@fortawesome/free-solid-svg-icons';

function ProductList({productData, handleAddToCart}) {
    const [searchParams, setSearchParams] = useSearchParams();
    const objectParams = Object.fromEntries([...searchParams]);
    console.log("objectParams", objectParams);

    const matchedProducts = productData.filter(product => {
    console.log("product cijena", product.cijena);
    console.log("objectParams cijena", objectParams.cijena);
    return (
        (product.cijena === objectParams.cijena || !objectParams.cijena) && // Check if the price matches or if no price filter applied
        (product.kategorija === objectParams.kategorija || !objectParams.kategorija) // Check if the category matches or if no category filter applied
    );
    })

    console.log("matched products", matchedProducts);

    return(
        <div className="products">
            {Object.keys(objectParams).length !== 0 ? (
                <ul>
                    {matchedProducts.map((item, index) => (
                        <li key={index}>
                            <Link to={"/products/"+item.id}>
                                <img src={item.image} alt={item.title} title={item.title} />
                                <h3 className="secondary-font">{item.title}</h3>
                            </Link>
                            <p className="main-font">{item.price} €</p>
                            <form><button onClick={() => handleAddToCart(item)}>Dodaj u košaricu</button></form>
                        </li>
                    ))}
                </ul>
            ) : (
                <ul>
                    {productData.map((item, index) => (
                        <li key={index}>
                            <Link to={"/products/"+item.id}>
                                <img src={item.image} alt={item.title} title={item.title} />
                                <h3 className="secondary-font">{item.title}</h3>
                            </Link>
                            <p className="main-font">{item.price} €</p>
                            <form><button onClick={() => handleAddToCart(item)}>Dodaj u košaricu</button></form>
                        </li>
                    ))}
                </ul>
            )}
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