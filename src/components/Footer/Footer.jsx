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

    return(
        <section className={"wholefooter"}>
            <div className={"footerrow1"}>
                <FooterWebMap 
                webMapOne={WebMapOne}
                webMapTwo={WebMapTwo}
                />
                <FooterContact 
                contact={["Telefon: 091/234-5678", "OIB: 1234567890", "E-mail: cyber@shop.com", "Adresa: Cyber Shop, Šibenik"]}
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