import './About.css'
import {images} from '../../assets/images.js'
import { AboutSidebar } from './AboutSidebar.jsx'
import { AboutMain } from './AboutMain.jsx'

function About({title}) {
    return(
        <main>
            <h1 className="main-text-color">{title}</h1>
            <div className="about-container">
                <AboutSidebar title={"Najnovije s bloga"}/>
                <AboutMain />
            </div>
        </main>
    )
}

export {About}