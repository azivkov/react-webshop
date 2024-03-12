import { Link } from "react-router-dom"
import {images} from '../../assets/images.js'

function HeaderSecondRow(props) {
    return(
        <div className={"secondrow"}> 
            <div className={"logo"}>
                <Link to="/"><img src={images.logo} className={"logo"} alt="Pet shop logo" title="Pet shop logo" /></Link>
            </div>
    
            <div className={"nav"}>
                <ul>
                    {props.navigation.map((item, index) =>
                    <li key={index}><Link to={item.link}>{item.title}</Link></li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export {HeaderSecondRow}