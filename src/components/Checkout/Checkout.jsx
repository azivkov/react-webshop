import './Checkout.css'
import { images } from '../../assets/images';
import { CheckoutAddress } from './CheckoutAddress';
import { CheckoutCart } from './CheckoutCart';

function Checkout({title}) {
    const checkoutForm = [
        {title: "Ime i prezime:", type: "text", id: "ime"},
        {title: "E-mail adresa", type: "mail", id:"email"},
        {title: "Kućna adresa:", type: "text", id: "adresa"},
        {title: "Grad:", type: "text", id: "grad"},
        {title: "Poštanski broj:", type: "number", id: "postbroj"},
        {title: "Država:", type: "text", id: "drzava"},
        {title: "Telefon:", type: "phone", id: "telefon"},
    ]

    return (
        <main className="checkout-container">
            <h1 className="secondary-font main-text-color">{title}</h1>
            <div className="container">
                <CheckoutAddress title={"Adresa dostave"} checkoutForm={checkoutForm} />
                <CheckoutCart />
            </div>
        </main>
    );
}

export { Checkout };
