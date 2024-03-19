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
        {title: "Mobiteli", image:"category1", kategorija: "mobiteli"},
        {title: "Stolna računala", image:"category2", kategorija: "stolnaracunala"},
        {title: "Laptopi", image:"category3", kategorija: "laptopi"},
        {title: "Televizori", image:"category4", kategorija: "televizori"},
        {title: "Konzole", image:"category5", kategorija: "konzole"},
        {title: "Printeri", image:"category6", kategorija: "printeri"},
        {title: "Tipkovnice", image:"category7", kategorija: "tipkovnice"},
        {title: "Pohrana podataka", image:"category8", kategorija: "pohrana"},
        {title: "Mrežna oprema", image:"category9", kategorija: "mreznaoprema"},
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