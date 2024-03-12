import './Home.css';
import { HomeBanner } from './HomeBanner';
import { HomeCategories } from './HomeCategories';
import { HomePopular } from './HomePopular';
import { HomeBottom } from './HomeBottom';

function Home() {
    const CategoriesOne = ["Mobiteli", "Stolna računala", "Laptopi", "Televizori", "Printeri"];
    const CategoriesTwo = ["Konzole", "Igre", "Tipkovnice", "Pohrana podataka", "Mrežna oprema"];
    const PopularProducts = [
        {title: "iPhone 15 128GB Blue", img: "product1", url: "/products/1", price: "989,99 €"},
        {title: "Samsung Galaxy S23 256GB", img: "product2", url: "/products/2", price: "849,99 €"},
        {title: "Laptop ACER Aspire 7", img: "product3", url: "/products/3", price: "829,99 €"},
        {title: "Sony Playstation 5", img: "product4", url: "/products/4", price: "559,99 €"},
        {title: "PS5 igra Baldur's Gate 3", img: "product5", url: "/products/5", price: "69,99 €"},
    ]

    return(
    <>
        <HomeBanner 
            title={["Uđite u svijet budućnosti sa Cyber Shopom -", "Vašim pouzdanim partnerom u svim tehnološkim potrebama!"]}
        />
        
        <HomeCategories 
            title={"Izbor prema kategoriji"}
            categoriesOne={CategoriesOne}
            categoriesTwo={CategoriesTwo}
        />
       
        <HomePopular 
            title={"Popularni proizvodi"}
            popularProducts={PopularProducts}
        />

        <HomeBottom />
        

        
    </>
    )
}

export {Home}