import { Link } from "react-router-dom"

function FooterWebMap({webMapOne, webMapTwo}) {
    return(
    <div class="mapa">
                <h3>Mapa web-a</h3>
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