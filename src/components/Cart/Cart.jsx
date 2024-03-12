import './Cart.css'
import {images} from '../../assets/images.js'
import { CartItems } from './CartItems.jsx'
import { Link } from 'react-router-dom'

function Cart() {
    const cartItems = [
        {image: "product4", title:"Sony Playstation 5", price:"559.99", count: "1"},
        {image: "product5", title:"PS5 igra Baldurs Gate 3", price:"69.99", count: "1"},
    ]

    return(
        <main className="cart-container">
        <h1 className="secondary-font">Vaša košarica</h1>
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>Slika</th>
                        <th>Naziv</th>
                        <th>Cijena</th>
                        <th>#</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <CartItems cartItems={cartItems}/>

                    <tr>
                        <td></td>
                        <td><b>UKUPNO:</b> </td>
                        <td><b>629.98 €</b></td>
                        <td>2</td>
                        <td></td>
                    </tr>
                </tbody>

            </table>
        </div>
        <div className="checkout">
            <Link to="/checkout"><button className="checkbutton">Idi na naplatu</button></Link>
        </div>

    </main>
    )
}

export {Cart}