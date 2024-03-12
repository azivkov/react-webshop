import './Footer.css'

function Footer() {
    return(
        <section class="wholefooter">
            <div class="footerrow1">
                <div class="mapa">
                    <h3>Mapa web-a</h3>
                    <ul>
                        <li><a href="index.html"  target="_parent">Početna stranica</a></li>
                        <li><a href="products.html"  target="_parent">Popis proizvoda</a></li>
                        <li><a href="productCategories.html" target="_parent">Kategorije proizvoda</a></li>
                        <li><a href="product-detail1.html" target="_parent">Detalj proizvoda</a></li>
                        <li><a href="cart.html" target="_parent">Košarica</a></li>
                        <li><a href="checkout.html" target="_parent">Proces plaćanja</a></li>
                        <li><a href="blog.html" target="_parent">Popis blogova</a></li>
                        <li><a href="blog-detail1.html" target="_parent">Detalj bloga</a></li>
                        <br />
                        <li><a href="faq.html" target="_parent">Česta pitanja</a></li>
                        <li><a href="terms.html" target="_parent">Uvjeti korištenja</a></li>
                        <li><a href="privacy.html" target="_parent">Pravila o privatnosti</a></li>
                        <li><a href="cookies.html" target="_parent">Pravila o kolačićima</a></li>
                        <br />
                    </ul>
                </div>
                <div class="kontakt">
                    <h3>Kontakt informacije</h3>
                    <ul>
                        <li>Telefon: 091/234-5678</li>
                        <li>OIB: 1234567890</li>
                        <li>E-mail: cyber@shop.com</li>
                        <li>Adresa: Cyber Shop, Šibenik</li>
                    </ul>
                </div>
                <div class="lokacija">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11534.89211671617!2d15.9078722!3d43.7163047!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13352596fefd40c5%3A0xdf9d5af364c27a35!2sCentar%20za%20nove%20tehnologije%20i%20poduzetni%C5%A1tvo%20Trokut!5e0!3m2!1shr!2shr!4v1703795858562!5m2!1shr!2shr"></iframe>
                </div>
            </div>
            <div class="footerrow2">
                Izradila: Anamaria Živković
            </div>
        </section>

        )
}

export {Footer}