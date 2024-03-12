import './Categories.css'
import { GamingCategories } from './GamingCategories'
import { AllCategories } from './AllCategories'

function Categories({title}) {
    const gaming = [
        {title: "PlayStation 5 igre", img: "gamingCategory1"},
        {title: "PlayStation 4 igre", img:"gamingCategory2"},
        {title: "XBox Series X igre", img:"gamingCategory3"},
        {title: "Nintendo Switch igre", img:"gamingCategory4"},
        {title: "PC igre", img:"gamingCategory5"},
    ]

    const allCategories = [
        {title: "Mobiteli", image:"category1"},
        {title: "Stolna računala", image:"category2"},
        {title: "Laptopi", image:"category3"},
        {title: "Televizori", image:"category4"},
        {title: "Konzole", image:"category5"},
        {title: "Printeri", image:"category6"},
        {title: "Tipkovnice", image:"category7"},
        {title: "Pohrana podataka", image:"category8"},
        {title: "Mrežna oprema", image:"category9"},
    ]

    return(
        <main>
            <h1 className={"main-text-color secondary-font"}>{title}</h1>
            <div className={"categories-container"}>
                <GamingCategories title={"Igre za konzole:"} gaming={gaming} />
                <AllCategories allCategories={allCategories} />
            </div>
        </main>
    )
}

export {Categories}