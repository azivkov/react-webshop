import React from 'react';
import './ProductsPage.css';
import { images } from '../../assets/images';
import { Link, useSearchParams } from "react-router-dom";
import { ProductFilters } from './ProductFilters';
import { ProductList } from './ProductList';
import { productData } from './productData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward, faBackward } from '@fortawesome/free-solid-svg-icons';


function ProductsPage({handleAddToCart}) {
    const priceFilter = [
        {value: "do49", title: "Do 49€"},
        {value: "50do199", title: "50€ - 199€"},
        {value: "200do499", title: "200€ - 499€"},
        {value: "iznad500", title: "Iznad 500€"},
    ]

    const categoryFilter = [
        {value: "mobiteli", title: "Mobiteli"},
        {value: "stolnaracunala", title: "Stolna računala"},
        {value: "laptopi", title: "Laptopi"},
        {value: "televizori", title: "Televizori"},
        {value: "konzole", title: "Konzole"},
        {value: "videoigre", title: "Videoigre"},
        {value: "printeri", title: "Printeri"},
        {value: "tipkovnice", title: "Tipkovnice"},
        {value: "pohrana", title: "Pohrana podataka"},
        {value: "mreznaoprema", title: "Mrežna oprema"},
    ]

    const [searchParams, setSearchParams] = useSearchParams();
    const objectParams = Object.fromEntries([...searchParams]);
    // console.log("objectParams", objectParams);

    const matchedProducts = productData.filter(product => {
    // console.log("product cijena", product.cijena);
    // console.log("objectParams cijena", objectParams.cijena);
    return (
        (product.cijena === objectParams.cijena || !objectParams.cijena) && 
        (product.kategorija === objectParams.kategorija || !objectParams.kategorija)
    );
    })

    return (
        <main>
            <h1 className="main-text-color">Proizvodi</h1>
            <div className="productlist-container">
                <ProductFilters priceFilter={priceFilter} categoryFilter={categoryFilter} />

                <ProductList productData={productData} 
                handleAddToCart={handleAddToCart} 
                objectParams={objectParams}
                matchedProducts={matchedProducts}/>
            </div>
        </main>

        
    );
}

export { ProductsPage };
