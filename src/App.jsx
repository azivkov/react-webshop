import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './components/Home/Home'
import { Categories } from './components/Categories/Categories'
import { Products } from './components/Products/Products'
import { ProductsPage } from './components/Products/ProductsPage'
import { DetailedProductView } from './components/Products/DetailedProductView'
import { About } from './components/About/About'
import { Blog } from './components/Blog/Blog'
import { BlogPage } from './components/Blog/BlogPage'
import { DetailedBlogView } from './components/Blog/DetailedBlogView'
import { Contact } from './components/Contact/Contact'
import { Cart } from './components/Cart/Cart'
import { Checkout } from './components/Checkout/Checkout'
import { Misc } from './components/Misc/Misc'
import { ErrorPage } from './components/ErrorPage/ErrorPage'

function App() {
  // Initialize cart state with items from localStorage or an empty array
    const [cart, setCart] = useState(() => {
      const storedCart = localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : [];
    });

    // Update localStorage whenever cart state changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const handleAddToCart = (item) => {
        const updatedCart = [...cart, item];
        setCart(updatedCart);
    };

    const removeFromCart = (index) => {
      const updatedCart = [...cart];
      updatedCart.splice(index, 1);
      setCart(updatedCart);
  };

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home handleAddToCart={handleAddToCart} />} />
          <Route path="/categories" element={<Categories title={"Kategorije proizvoda"}/>} />
          <Route path="/products" element={<Products />}>
            <Route index element={<ProductsPage handleAddToCart={handleAddToCart} />} />
            <Route path="/products/:id" element={<DetailedProductView handleAddToCart={handleAddToCart} />} />
          </Route>
          <Route path="/about" element={<About title={"O nama"}/>} />
          <Route path="/blog" element={<Blog />}>
            <Route index element={<BlogPage />} />
            <Route path="/blog/:id" element={<DetailedBlogView />} />
          </Route>
          <Route path="/contact" element={<Contact title={"Kontaktirajte nas"}/>} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart}/>} />
          <Route path="/checkout" element={<Checkout title={"Plaćanje"} cart={cart}/>} />
          <Route path="/cookies" element={<Misc />} />
          <Route path="/privacy" element={<Misc />} />
          <Route path="/terms" element={<Misc />} />
          <Route path="/faq" element={<Misc />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
