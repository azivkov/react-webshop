import {images} from '../../assets/images.js'
import { Link } from 'react-router-dom'

function HomeBlogDetail({title, image, content, url}) {
    return(
        <div>
            <h3 className={"main-font main-text-color"}><img src={images[image]} alt={title}
                    title={title} />{title}</h3>
            <p className={"main-font"}>{content}
            </p>

            <Link to={url}>Pročitaj više...</Link>
        </div>
    )
}

export {HomeBlogDetail}