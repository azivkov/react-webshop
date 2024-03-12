function CheckoutAddress({title, checkoutForm, payment}) {


    return(
        <div className="placanje">
            <form className="payform">
                <legend className="secondary-font main-text-color">{title}</legend>
                <></>
                {checkoutForm.map(item => (
                    <p><label htmlFor={item.id}>{item.title} <br />
                        <input type={item.type} id={item.id} name={item.id} required /></label></p>
                ))}

                <label htmlFor="instrukcije">Instrukcije za dostavu:<br />
                    <textarea rows="5" cols="30" maxLength="400"
                        placeholder="Možete unijeti najviše 400 znakova" id="instrukcije"></textarea></label>

                <legend className="secondary-font main-text-color">Način plaćanja:</legend>

                {payment.map(item => (
                    <p><input type="radio" id={item.id} name="placanje" value={item.id} /><label htmlFor={item.id}>{item.title}</label></p>
                ))}<br />

                <label htmlFor="privola"><input type="checkbox" id="privola" name="privola" value="yes"
                        required /><span className="privola">Prihvaćam prikupljanje i obradu osobnih podataka danih u
                        obrascu bez kojih moj zahtjev ne može biti ispunjen, te da me Pet Paradise kontaktira u
                        svrhu slanja obavijesti.</span></label><br /><br />
                <label htmlFor="newsletter"><input type="checkbox" id="newsletter" name="newsletter"
                        value="newsletter" /><span className="newsletter">Prijavi me na
                        Newsletter</span></label><br /><br />

                <div className="paymentbutton"><button type="submit" className="paybutton">Naruči!</button></div>
            </form>
        </div>
    )
}

export {CheckoutAddress}