import { images } from '../../assets/images';

function CheckoutCart({cart}) {
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

                {cart.map(item => (
                    <tr>
                        <td><img src={item.image} width="50" /></td> 
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