function ContactForm() {
    return(
        <div className="form">
                    <form>
                        <label htmlFor="ime">Ime i prezime: <br />
                            <input type="text" name="ime" id="ime" required />
                        </label>
                        <br /><br />
                        <label htmlFor="email">E-mail: <br />
                            <input type="email" name="email" id="email" required />
                        </label>
                        <br /><br />
                        <label htmlFor="poruka">Vaša poruka: <br />
                            <textarea placeholder="Napišite poruku" name="poruka" rows="7" cols="40" id="poruka" required></textarea>
                        </label>
                        <br /><br />

                        <label htmlFor="privola">
                            <input type="checkbox" id="privola" name="privola" value="yes" required />
                            <span className="privola">Prihvaćam prikupljanje i obradu osobnih podataka danih u
                                obrascu bez kojih moj <br />zahtjev ne može biti ispunjen, te da me Pet Paradise kontaktira u
                                svrhu slanja obavijesti.</span>
                        </label>
                        <br /><br />
                        <label htmlFor="newsletter">
                            <input type="checkbox" id="newsletter" name="newsletter" value="newsletter" />
                            <span className="newsletter">Prijavi me na Newsletter</span>
                        </label>
                        <br /><br />
                        <button type="submit">Pošaljite poruku</button> <button type="reset">Izbrišite</button>
                    </form>
                </div>
    )
}

export {ContactForm}