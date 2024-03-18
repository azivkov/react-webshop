import React from 'react';

function CartItems({ cart, removeFromCart }) {
    // Calculate total items and total price
    const { totalItems, totalPrice } = calculateTotals(cart);
    function calculateTotals(cart) {
        let totalItems = cart.length;
        let totalPrice = cart.reduce((acc, item) => {
            return acc + parseFloat(item.price);
        }, 0);
    
        return { totalItems, totalPrice };
    }

    return (
        <>
            {cart.map((item, index) => (
                <tr key={index}>
                    <td><img src={item.image} width="50" alt={item.title} /></td> 
                    <td>{item.title}</td> 
                    <td>{item.price} €</td>
                    <td>1</td>
                    <td><button className="remove "onClick={() => removeFromCart(index)}>Ukloni</button></td>
                </tr>
            ))}
            <tr>
                <td></td>
                <td><b>UKUPNO:</b> </td>
                <td><b>{totalPrice.toFixed(2)} €</b></td>
                <td>{totalItems}</td>
                <td></td>
            </tr>
        </>
    );
}

export { CartItems };
