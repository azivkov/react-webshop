import { images } from '../../assets/images';

function CheckoutCart({cartItems}) {
    return(
        <div className="kosarica">
        <h2 className="secondary-font main-text-color">Pregled košarice</h2>

        <table>
            <thead><tr>
                <th></th>
                <th>Naziv proizvoda</th>
                <th>Cijena</th>
            </tr>
            </thead>
            <tbody>

                {cartItems.map(item => (
                    <tr>
                        <td><img src={images[item.image]} width="50" /></td> 
                        <td>{item.title}</td> 
                        <td>{item.price} €</td>
                    </tr>
                ))}
            <tr>
                <td></td>
                <td><b>UKUPNO:</b> </td>
                <td><b>629.98 €</b></td>
            </tr>
            </tbody>
        </table>
    </div>
    )
}

export {CheckoutCart}