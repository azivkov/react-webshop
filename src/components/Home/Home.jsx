import './Home.css';
import { HomeBanner } from './HomeBanner';
import { HomeCategories } from './HomeCategories';
import { HomePopular } from './HomePopular';
import { HomeBottom } from './HomeBottom';

function Home() {
    const CategoriesOne = ["Mobiteli", "Stolna računala", "Laptopi", "Televizori", "Printeri"];
    const CategoriesTwo = ["Konzole", "Igre", "Tipkovnice", "Pohrana podataka", "Mrežna oprema"];
    const PopularProducts = [
        {
            id: 1,
            title: "iPhone 15 128GB Blue",
            price: 989.99,
            image: "https://i.imgur.com/0ehfIwO.jpg",
            description: "Upoznajte iPhone 15 u predivnoj plavoj boji s prostranim prostorom za pohranu od 128GB - savršen spoj elegantnog dizajna i visoke funkcionalnosti. Ovaj izuzetan pametni telefon donosi vrhunski doživljaj korisnika uz inovativne značajke poput naprednog sustava kamera, moćnog A15 Bionic čipa i poboljšane trajnosti. Uživajte u besprijekornoj izvedbi, brzoj pohrani podataka te vrhunskim mogućnostima snimanja i uređivanja fotografija i videozapisa. iPhone 15 Blue 128GB je sjajan odabir za one koji traže spoj vrhunske tehnologije i estetske privlačnosti. Osvježite svoj digitalni svijet s ovim impresivnim uređajem koji će zadovoljiti i najzahtjevnije korisnike."
        },
        {
            id: 2,
            title: "Samsung Galaxy S23",
            price: 849.99,
            image: "https://i.imgur.com/om4R045.jpg",
            description: "Dobrodošli u vrhunski mobilni svijet s Samsung Galaxy S23 u elegantnoj crnoj boji i prostranim prostorom za pohranu od 256GB. Ovaj pametni telefon donosi vrhunske značajke, uključujući napredan sustav kamera, brz i moćan procesor te visokokapacitetnu pohranu za sve vaše potrebe. S23 Black kombinira sofisticiran dizajn s visokom funkcionalnošću, pružajući vrhunsko iskustvo korisnika. Uživajte u impresivnim performansama, poboljšanoj trajnosti te bogatom ekosustavu Samsungovih inovacija. S ovim uređajem, iskusite naprednu tehnologiju spojenu s elegantnim izgledom, savršenim za one koji traže vrhunsku mobilnu platformu. Samsung Galaxy S23 Black 256GB - Vaša budućnost u pametnom telefoniranju."
        },
        {
            id: 3,
            title: "Laptop ACER Aspire 7",
            price: 829.99,
            image: "https://i.imgur.com/QioYljt.jpg",
            description: "Upoznajte ACER Aspire 7 - prijenosno računalo koje kombinira izvanredne performanse i elegantan dizajn.Opremljen moćnim procesorom i velikim kapacitetom memorije, ovaj laptop pruža brz odziv i fluidno iskustvo rada.S tanak i moderan dizajn, Aspire 7 nudi ugodno iskustvo rada uz impresivan zaslon visoke rezolucije.Idealan je za produktivnost, kreativne projekte i igre, pružajući svestranost koja odgovara različitim potrebama korisnika.Sa snažnom kombinacijom performansi i dizajna, ACER Aspire 7 je pouzdan partner za one koji traže svestran i efikasan prijenosni računar."
        },
        {
            id: 4,
            title: "Sony Playstation 5",
            price: 559.99,
            image: "https://i.imgur.com/FT4Ltdj.jpg",
            description: "Doživite revoluciju u gamingu s PlayStation 5, vrhunskom igraćom konzolom koja podiže iskustvo igranja na potpuno novu razinu. PlayStation 5 donosi nevjerojatnu grafiku u 4K rezoluciji, brzi SSD za gotovo trenutačno učitavanje igara, te revolucionarni DualSense kontroler koji pruža senzacionalan taktički doživljaj igre. S bogatstvom ekskluzivnih naslova i podrškom za VR iskustva, PS5 je centar vrhunske zabave. Uživajte u realističnom gamingu, besprijekornom performansama i inovativnim značajkama koje čine PlayStation 5 nezaobilaznom igraćom konzolom za ljubitelje videoigara širom svijeta. Osvježite svoje iskustvo igranja s najnovijom tehnologijom uz PlayStation 5."
        },
        {
            id: 5,
            title: "Baldurs Gate 3 za PS5",
            price: 59.99,
            image: "https://i.imgur.com/yKpyPz0.png",
            description: "Baldur's Gate 3, epicentar avanture u svijetu Dungeons & Dragons, pruža nevjerojatno duboko iskustvo uloge u kojem se igrači upuštaju u epsko putovanje prepuno tajni, izazova i fantastičnih bića. Razvijen od strane Larian Studios, igra oživljava bogatstvo D&D svemira uz spektakularnu grafiku, duboke narativne krivulje i inovativan sustav odlučivanja koji oblikuje priču prema igračevim akcijama. S uvjerljivim likovima, bogatim okolinama i taktičkim borbenim sustavom, Baldur's Gate 3 je nezaobilazno iskustvo za ljubitelje RPG igara, pružajući im priliku da istraže opasnosti i misterije ove izvanredne fantazijske avanture."
        },
    ]

    return(
    <>
        <HomeBanner 
            title={["Uđite u svijet budućnosti sa Cyber Shopom -", "Vašim pouzdanim partnerom u svim tehnološkim potrebama!"]}
        />
        
        <HomeCategories 
            title={"Izbor prema kategoriji"}
            categoriesOne={CategoriesOne}
            categoriesTwo={CategoriesTwo}
        />
       
        <HomePopular 
            title={"Popularni proizvodi"}
            popularProducts={PopularProducts}
        />

        <HomeBottom />
        

        
    </>
    )
}

export {Home}