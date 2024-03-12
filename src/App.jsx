import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './components/Home/Home'
import { Categories } from './components/Categories/Categories'
import { Products } from './components/Products/Products'
import { SingleProduct } from './components/Products/SingleProduct'
import { ProductList } from './components/Products/ProductList'
import { About } from './components/About/About'
import { Blog } from './components/Blog/Blog'
import { BlogList } from './components/Blog/BlogList'
import { SingleBlog } from './components/Blog/SingleBlog'
import { Contact } from './components/Contact/Contact'
import { Cart } from './components/Cart/Cart'
import { Checkout } from './components/Checkout/Checkout'
import { Misc } from './components/Misc/Misc'
import { ErrorPage } from './components/ErrorPage/ErrorPage'
import { Page } from './components/Page/Page'


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/categories" element={<Categories title={"Kategorije proizvoda"}/>} />
          <Route path="/products" element={<Products />}>
            <Route index element={<ProductList />} />
            <Route path="/products/:id" element={<SingleProduct />} />
          </Route>
          <Route path="/about" element={<About title={"O nama"}/>} />
          <Route path="/blog" element={<Blog />}>
            <Route index element={<BlogList />} />
            <Route path="/blog/:id" element={<SingleBlog />} />
          </Route>
          <Route path="/contact" element={<Contact title={"Kontaktirajte nas"}/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout title={"Plaćanje"}/>} />
          <Route path="/cookies" element={<Misc />} />
          <Route path="/privacy" element={<Misc />} />
          <Route path="/terms" element={<Misc />} />
          <Route path="/faq" element={<Misc />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/page" element={<Page title={"Some title"} description={"Lorem ipsum"}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

//proslijediti propse za svaki component i proslijediti html
//napraviti child componente unutar svake veće komponente (sve osim headera i footera vjerojatno)
//unutar products i blog napraviti još ruta (za product details i blog details) 

export default App
