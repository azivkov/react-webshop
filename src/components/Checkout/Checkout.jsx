import './Checkout.css'
import { images } from '../../assets/images';
import { CheckoutAddress } from './CheckoutAddress';
import { CheckoutCart } from './CheckoutCart';

function Checkout({title}) {

    return (
        <main className="checkout-container">
            <h1 className="secondary-font main-text-color">{title}</h1>
            <div className="container">
                <CheckoutAddress title={"Adresa dostave"}/>
                <CheckoutCart />
            </div>
        </main>
    );
}

export { Checkout };
