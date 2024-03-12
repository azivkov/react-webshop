import { images } from '../../assets/images.js';

function AboutMain() {
    return (
        <div className="about secondary-font">
            <div className="about1">
                <p>Dobrodošli u CyberShop - vašeg pouzdanog partnera u svijetu vrhunske tehnologije! Naša
                    strast leži u pružanju najnovijih i najkvalitetnijih mobilnih uređaja, laptopa, konzola, igara i
                    ostalih tehnoloških inovacija koje poboljšavaju vaš digitalni svijet. </p>
            </div>
            <div className="about2">
                <h2 className="secondary-font main-text-color">Što nas čini posebnima:</h2>
                <p><img src={images.about1} className="img1"
                    alt="Online shopping" title="Online shopping" /><span>Širok asortiman:</span> CyberShop se ponosi
                svojim iznimno širokim asortimanom proizvoda. Bilo da tražite najnovije modele pametnih
                telefona, moćne prijenosnike, igraće konzole ili gaming periferiju, kod nas ćete pronaći sve na
                jednom mjestu.</p>

                <p><span>Vrhunska kvaliteta proizvoda:</span> Svaki proizvod u našoj ponudi pažljivo je odabran kako
                bi zadovoljio najviše standarde kvalitete i performansi. Ovdje možete biti sigurni da ćete
                dobiti visokokvalitetne proizvode koji ispunjavaju vaša očekivanja.</p>

                <p><span>Pristupačne cijene:</span> Želimo da vrhunska tehnologija bude dostupna svima. Stoga,
                CyberShop nudi konkurentske cijene koje često nadmašuju očekivanja, omogućujući vam da
                ostvarite najbolju vrijednost za svoj novac.</p>

                <p><span>Stručni tim savjetnika:</span> Naš stručni tim kupcima je uvijek na raspolaganju za
                pružanje informacija, savjeta i podrške. Bez obzira na to jeste li u potrazi za tehničkim
                detaljima ili vam je potrebna preporuka, tu smo kako bismo vam pomogli.</p>
            </div>

            <div className="about3">
                <p><img src={images.about2} className="img2" alt="Electronics store"
                    title="Electronics store" /><span>Sigurna i brza dostava:</span> CyberShop brine o vašem zadovoljstvu,
                uključujući sigurnost i brzinu dostave. Surađujemo s pouzdanim partnerima kako bismo osigurali
                da vaši proizvodi stignu brzo i sigurno na vaša vrata.</p>

                <p><span>Redovne promocije i popusti:</span> Uz redovne promocije i posebne popuste, nudimo vam
                priliku da uštedite dodatni novac prilikom kupovine. Pratite naše akcije i iskoristite
                fantastične ponude.</p>

                <p><span>Jednostavna i intuitivna kupovina:</span> Naš web shop je dizajniran kako bi vam omogućio
                jednostavnu i intuitivnu kupovinu. Brzo pronađite željene proizvode, jednostavno ih dodajte u
                košaricu i obavite sigurnu transakciju. </p>

                <p><span>Pouzdane recenzije kupaca:</span> CyberShop cijeni povratne informacije naših kupaca.
                Recenzije koje ostavljaju naši zadovoljni kupci pomažu nam u stalnom poboljšavanju naše usluge i
                asortimana. Vaše povjerenje i zadovoljstvo su naša najveća nagrada.</p>
            </div>

            <div className="about4">
                <p>Uvjerite se sami u našu predanost kvaliteti i izvrsnosti. CyberShop - vaša destinacija za vrhunsku tehnologiju!</p>
            </div>
        </div>
    );
}

export { AboutMain };
