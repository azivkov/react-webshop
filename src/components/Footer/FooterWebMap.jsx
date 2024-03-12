import { Link } from "react-router-dom"

function FooterWebMap({title, webMapOne, webMapTwo}) {
    return(
    <div className={"mapa"}>
                <h3>{title}</h3>
                <ul>
                    {webMapOne.map((item, index) => (
                        <li key={index}><Link to={item.link}>{item.title}</Link></li>
                    ))}
                    <br />
                    {webMapTwo.map((item,index) => (
                        <li key={index}><Link to={item.link}>{item.title}</Link></li>
                    ))}
                    <br />
                </ul>
            </div>
    )
}

export {FooterWebMap}