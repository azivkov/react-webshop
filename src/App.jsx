import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Login } from "./components/Login/Login";
import { Home } from "./components/Home/Home";
import { Categories } from "./components/Categories/Categories";
import { Products } from "./components/Products/Products";
import { ProductsPage } from "./components/Products/ProductsPage";
import { DetailedProductView } from "./components/Products/DetailedProductView";
import { About } from "./components/About/About";
import { Blog } from "./components/Blog/Blog";
import { BlogPage } from "./components/Blog/BlogPage";
import { DetailedBlogView } from "./components/Blog/DetailedBlogView";
import { Contact } from "./components/Contact/Contact";
import { Cart } from "./components/Cart/Cart";
import { Checkout } from "./components/Checkout/Checkout";
import { Order } from "./components/Order/Order";
import { Cookies } from "./components/Misc/Cookies";
import { Terms } from "./components/Misc/Terms";
import { Privacy } from "./components/Misc/Privacy";
import { FAQPage } from "./components/Misc/FAQPage";
import { ErrorPage } from "./components/ErrorPage/ErrorPage";
import { AppContext } from "./context/AppContext";
import toast from "react-hot-toast";

function App() {
  // Initialize cart state with items from localStorage or an empty array
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Update localStorage whenever cart state changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    toast.success("Dodano u košaricu!");
  };

  const removeFromCart = (item) => {
    const updatedCart = [...cart];
    updatedCart.splice(item, 1);
    setCart(updatedCart);
  };

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : [];
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  console.log(cart);

  return (
    <>
      <AppContext.Provider
        value={{
          cart,
          setCart,
          handleAddToCart,
          removeFromCart,
          user,
          setUser,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/categories"
                element={<Categories title={"Kategorije proizvoda"} />}
              />
              <Route path="/products" element={<Products />}>
                <Route index element={<ProductsPage />} />
                <Route path="/products/:id" element={<DetailedProductView />} />
              </Route>
              <Route path="/about" element={<About title={"O nama"} />} />
              <Route path="/blog" element={<Blog />}>
                <Route index element={<BlogPage />} />
                <Route path="/blog/:id" element={<DetailedBlogView />} />
              </Route>
              <Route
                path="/contact"
                element={<Contact title={"Kontaktirajte nas"} />}
              />
              <Route path="/cart" element={<Cart />} />
              <Route
                path="/checkout"
                element={<Checkout title={"Plaćanje"} />}
              />
              <Route path="/order" element={<Order />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;
