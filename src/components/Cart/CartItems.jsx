import {images} from '../../assets/images.js'

function CartItems({cartItems}) {
    return(
        <>
            {cartItems.map(item => (
                <tr>
                    <td><img src={images[item.image]} width="50" /></td> 
                    <td>{item.title}</td> 
                    <td>{item.price} €</td>
                    <td>{item.count}</td>
                    <td><input type="button" value="Ukloni" className="remove" /></td>
                </tr>
            ))}
        </>
    )
}

export {CartItems}