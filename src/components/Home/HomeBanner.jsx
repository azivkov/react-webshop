import {images} from '../../assets/images.js'

function HomeBanner({title}) {
    return(
        <div className={"container1"}> 
        <h1>{title[0]} <br /> {title[1]}</h1>
        <img src={images.banner} alt={"Cyber Shop banner"}
            title={"Cyber Shop banner"} />
    </div>
    )
}

export {HomeBanner}