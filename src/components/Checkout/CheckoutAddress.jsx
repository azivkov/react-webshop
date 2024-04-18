import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function CheckoutAddress({ title }) {

    const [formValues, setFormValues] = useState({
        ime: "",
        email: "",
        adresa: "",
        grad: "",
        postbroj: "",
        drzava: "",
        telefon: "",
        placanje: "",
        privola: ""
    });

    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (formValid) {
            console.log("Navigating to /order");
            window.location.href = "/order";
        }
    }, [formValid]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const handleOrder = () => {
        const isFormValid = Object.values(formValues).every(value => value.trim() !== "");
        setFormValid(isFormValid);

        if (isFormValid) {
            console.log("Naruždba je uspješna!");
        } else {
            alert("Molim Vas da ispunite sva polja.");
        }
    };

    return (
        <div className="placanje">
            <form className="payform">
                <legend className="secondary-font main-text-color">{title}</legend>
                    <label htmlFor="ime">Ime i prezime: <br />
                        <input type="text" id="ime" name="ime" value={formValues.ime} onChange={handleInputChange} required />
                    </label> <br /><br />

                    <label htmlFor="email">E-mail adresa: <br />
                        <input type="email" id="email" name="email" value={formValues.email} onChange={handleInputChange} required />
                    </label> <br /><br />

                    <label htmlFor="adresa">Kućna adresa: <br />
                        <input type="text" id="adresa" name="adresa" value={formValues.adresa} onChange={handleInputChange} required />
                    </label> <br /><br />

                    <label htmlFor="grad">Grad: <br />
                        <input type="text" id="grad" name="grad" value={formValues.grad} onChange={handleInputChange} required />
                    </label> <br /><br />

                    <label htmlFor="postbroj">Poštanski broj: <br />
                        <input type="number" id="postbroj" name="postbroj" value={formValues.postbroj} onChange={handleInputChange} required />
                    </label> <br /><br />

                    <label htmlFor="drzava">Država: <br />
                        <input type="text" id="drzava" name="drzava" value={formValues.drzava} onChange={handleInputChange} required />
                    </label> <br /><br />

                    <label htmlFor="telefon">Telefon: <br />
                        <input type="phone" id="telefon" name="telefon" value={formValues.telefon} onChange={handleInputChange} required />
                    </label> <br /><br />

                <label htmlFor="instrukcije">Instrukcije za dostavu:<br />
                    <textarea rows="5" cols="30" maxLength="400"
                        placeholder="Možete unijeti najviše 400 znakova" id="instrukcije"></textarea>
                </label> <br /><br />

                <legend className="secondary-font main-text-color">Način plaćanja:</legend>
                        <input type="radio" id="kartica" name="placanje" value="kartica" onChange={handleInputChange} required />
                        <label htmlFor="kartica">Kreditna kartica</label><br />

                        <input type="radio" id="paypal" name="placanje" onChange={handleInputChange} value="paypal" />
                        <label htmlFor="paypal">Paypal</label><br />

                        <input type="radio" id="virman" name="placanje" onChange={handleInputChange} value="virman" />
                        <label htmlFor="virman">Virmansko plaćanje</label><br />

                        <input type="radio" id="pouzece" name="placanje" onChange={handleInputChange} value="pouzece" />
                        <label htmlFor="pouzece">Plaćanje pouzećem</label><br /><br />

                <label htmlFor="privola">
                <input
                        type="checkbox"
                        id="privola"
                        name="privola"
                        value="yes"
                        checked={formValues.privola}
                        onChange={handleInputChange}
                        required
                    />
                    <span className="privola">Prihvaćam prikupljanje i obradu osobnih podataka danih u
                        obrascu bez kojih moj zahtjev ne može biti ispunjen, te da me CyberShop kontaktira u
                        svrhu slanja obavijesti.</span>
                </label><br /><br />

                <label htmlFor="newsletter">
                    <input type="checkbox" id="newsletter" name="newsletter" value="newsletter" />
                    <span className="newsletter">Prijavi me na Newsletter</span>
                </label><br /><br />

                <div className="paymentbutton">
                    <button 
                        type="button" 
                        className="paybutton" 
                        onClick={() => {
                            if (formValid) {
                                window.location.href = "/order";
                            } else {
                                handleOrder();
                            }
                        }}
                    >
                        Naruči!
                    </button>
                </div>
            </form>
        </div>
    );
}

export { CheckoutAddress };
