import { Link } from "react-router-dom"

function HomePopular({title, popularProducts}) {
    console.log(popularProducts);
    return(
        <div className={"popularno"}>
            <h2 className={"secondary-font main-text-color"}>{title}</h2>
            <ul className={"popproizv"}>
                {popularProducts.map((item, index) => (
                    <li key={index}><Link to={item.url}><img src={item.img} alt={item.title} title={item.title}/>
                        <h3 className={"secondary-font"}>{item.title}</h3>
                    </Link>
                    <p className={"main-font"}>{item.price}</p>
                    <p>
                    <button>Dodaj u košaricu</button>
                    </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export {HomePopular}