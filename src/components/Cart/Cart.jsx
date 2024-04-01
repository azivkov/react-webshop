import './Cart.css'
import {images} from '../../assets/images.js'
import { CartItems } from './CartItems.jsx'
import { Link } from 'react-router-dom'

function Cart() {
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
                    <CartItems />
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