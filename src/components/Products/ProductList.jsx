import { Link } from "react-router-dom"
import { images } from "../../assets/images"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward, faBackward } from '@fortawesome/free-solid-svg-icons';

function ProductList({productData}) {
    return(
        <div className="products">
            <ul>
                {productData.map((item, index) => (
                    <li key={index}>
                        <Link to={"/products/"+item.id}>
                            <img src={item.image} alt={item.title} title={item.title} />
                            <h3 className="secondary-font">{item.title}</h3>
                        </Link>
                        <p className="main-font">{item.price} €</p>
                        <p>
                            <button>Dodaj u košaricu</button>
                        </p>
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