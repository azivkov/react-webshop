import { Link } from "react-router-dom"

function HomeCategories({title, categoriesOne, categoriesTwo}) {
    return(
        <div className={"proizvodi"}>
        <h2 className={"secondary-font main-text-color"}>{title}</h2>
        <ul className={"katproizvodi"}>
            {categoriesOne.map((item, index) => (
                <li key={index}><Link to={"/products?kategorija="+item.link}><button>{item.title}</button></Link></li>
            ))}
        </ul>
        <ul className={"katproizvodi2"}>
            {categoriesTwo.map((item, index) => (
                <li key={index}><Link to={"/products?kategorija="+item.link}><button>{item.title}</button></Link></li>
                ))}
        </ul>
    </div>
    )
}

export {HomeCategories}