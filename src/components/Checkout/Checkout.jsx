import './Checkout.css'
import { images } from '../../assets/images';
import { CheckoutAddress } from './CheckoutAddress';
import { CheckoutCart } from './CheckoutCart';

function Checkout({title}) {
    const checkoutForm = [
        {title: "Ime i prezime:", type: "text", id: "ime"},
        {title: "Kućna adresa:", type: "text", id: "adresa"},
        {title: "Grad:", type: "text", id: "grad"},
        {title: "Poštanski broj:", type: "number", id: "postbroj"},
        {title: "Država:", type: "text", id: "drzava"},
        {title: "Telefon:", type: "phone", id: "telefon"},
    ]

    const payment = [
        {id:"kartica", title:"Kreditna kartica"},
        {id:"paypal", title:"Paypal"},
        {id:"virman", title:"Virmansko plaćanje"},
        {id:"pouzece", title:"Plaćanje pouzećem"}
    ]

    const cartItems = [
        {image: "product4", title:"Sony Playstation 5", price:"559.99", count: "1"},
        {image: "product5", title:"PS5 igra Baldurs Gate 3", price:"69.99", count: "1"},
    ]

    return (
        <main className="checkout-container">
            <h1 className="secondary-font main-text-color">{title}</h1>
            <div className="container">
                <CheckoutAddress title={"Adresa dostave"} checkoutForm={checkoutForm} payment={payment}/>
                <CheckoutCart cartItems={cartItems}/>
            </div>
        </main>
    );
}

export { Checkout };
