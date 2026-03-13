import { useState } from "react";
import Navbar from "./components/Navbar";
import Start from "./components/Start";
import MainSection from "./components/MainSection";
import ProductSlider from "./components/ProductSlider";
import ProductsSection from "./components/ProductsSection";
import SpeakerSection from "./components/SpeakerSection";
import AmplifierSection from "./components/AmplifierSection";
import BlogSection from "./components/BlogSection";
import Subwoofersection from "./components/Subwoofersection";
import Footer from "./components/Footer";
import CartOffcanvas from "./components/CartOffcanvas";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.title === product.title);
      if (existing) {
        return prev.map((i) =>
          i.title === product.title ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (title) => {
    setCartItems((prev) => prev.filter((i) => i.title !== title));
  };

  const updateQty = (title, delta) => {
    setCartItems((prev) =>
      prev
        .map((i) => (i.title === title ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0)
    );
  };

  const cartCount = cartItems.reduce((sum, i) => sum + i.qty, 0);

  return (
    <div>
      <Start text="Free Delivery & 60-Day Returns* – Everyday!" />
      <Navbar cartCount={cartCount} />

      <section id="home">
        <MainSection />
      </section>

      <section id="featured">
        <ProductSlider addToCart={addToCart} />
      </section>

      <section id="bestsellers">
        <ProductsSection addToCart={addToCart} />
      </section>

      <section id="speakers">
        <SpeakerSection addToCart={addToCart} />
      </section>

      <section id="amplifiers">
        <AmplifierSection addToCart={addToCart} />
      </section>

      <section id="blog">
        <BlogSection />
      </section>

      <section id="subwoofers">
        <Subwoofersection addToCart={addToCart} />
      </section>

      <Footer />

      <CartOffcanvas
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        updateQty={updateQty}
      />
    </div>
  );
};

export default App;
