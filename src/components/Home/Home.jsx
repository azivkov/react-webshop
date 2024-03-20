import './Home.css';
import { HomeBanner } from './HomeBanner';
import { HomeCategories } from './HomeCategories';
import { HomePopular } from './HomePopular';
import { HomeBottom } from './HomeBottom';
import { productData } from '../Products/productData';

function Home({handleAddToCart}) {
    const CategoriesOne = ["Mobiteli", "Stolna računala", "Laptopi", "Televizori", "Printeri"];
    const CategoriesTwo = ["Konzole", "Igre", "Tipkovnice", "Pohrana podataka", "Mrežna oprema"];
    const PopularProducts = [...productData].slice(0,5);

    return(
    <>
    <div className="main-home">
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
            handleAddToCart={handleAddToCart}
        />

        <HomeBottom />
    </div>
    </>
    )
}

export {Home}