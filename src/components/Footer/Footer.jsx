import './Footer.css'
import { FooterWebMap } from './FooterWebMap'
import { FooterContact } from './FooterContact'
import { FooterLocation } from './FooterLocation'

function Footer() {

    const WebMapOne = [
        {link: "/", title: "Početna stranica"},
        {link: "/products", title:"Popis proizvoda"},
        {link: "/categories", title:"Kategorije proizvoda"},
        {link:"/products/1", title:"Detalj proizvoda"},
        {link:"/cart", title:"Košarica"},
        {link:"/checkout", title:"Proces plaćanja"},
        {link:"/blog", title:"Popis blogova"},
        {link:"/blog/1", title:"Detalj bloga"},
    ]

    const WebMapTwo = [
        {link:"/faq", title: "Česta pitanja"},
        {link:"/terms", title:"Uvjeti korištenja"},
        {link:"/privacy", title:"Pravila o privatnosti"},
        {link:"/cookies", title:"Pravila o kolačićima"}
    ]

    const contact = [
        {type: "Mobitel: ", info: "091-234/5678"},
        {type: "Telefon: ", info: "01/111-1111"},
        {type: "OIB: ", info: "1234567890"},
        {type: "Adresa: ", info: "Cyber Shop, Šibenik"},
        {type:"E-mail: ", info: "cyber@shop.com"}
    ]

    return(
        <section className={"wholefooter"}>
            <div className={"footerrow1"}>
                <FooterWebMap 
                title={"Mapa web-a"}
                webMapOne={WebMapOne}
                webMapTwo={WebMapTwo}
                />
                <FooterContact
                title={"Kontakt informacije"}
                contact={contact}
                />
                <FooterLocation />
            </div>
            <div className={"footerrow2"}>
                Izradila: Anamaria Živković
            </div>
        </section>

        )
}

export {Footer}