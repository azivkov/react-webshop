function BlogSidebar() {
    return(
        <div className="newsletter">
            <h3 className="secondary-font main-text-color">Prijavi se na naš newsletter!</h3>
            <p className="main-font">
                Želite li biti u toku s najnovijim trendovima, ekskluzivnim ponudama i posebnim popustima? Prijavite
                se na naš newsletter i osigurajte si pristup ekskluzivnim informacijama koje će vašu online shopping
                avanturu učiniti još uzbudljivijom. <br /><br />Budite prvi koji će saznati o najnovijim proizvodima,
                posebnim
                sniženjima i limitiranim serijama. Osim toga, prijavljeni članovi imaju priliku sudjelovati u
                posebnim nagradnim igrama i osvojiti fantastične poklone. Ne propustite priliku za dodatnim uštedama
                i iznenađenjima - prijavite se sada i uživajte u privilegijama koje donosi naš cyber shop!
            </p>

            <form>
                <label htmlFor="email">
                    <input type="email" placeholder="Upišite e-mail adresu" id="email" name="email" required />
                    <button type="submit">Prijavi se!</button>
                </label>
                <br /><br />
                <label htmlFor="privola">
                    <input type="checkbox" id="privola" name="privola" value="yes" required />
                    <span className="privola">Prihvaćam prikupljanje i obradu osobnih podataka danih u
                        obrascu bez kojih moj zahtjev ne može biti ispunjen, te da me Pet Paradise kontaktira u
                        svrhu slanja obavijesti.</span>
                </label>
            </form>
        </div>
    )
}

export {BlogSidebar}