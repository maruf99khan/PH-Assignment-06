
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductsAndCart from "./components/ProductsAndCart";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const handleRemoveFromCart = (productId) => {
    const item = cart.find(item => item.id === productId);
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex > -1) {
      const newCart = cart.filter((_, idx) => idx !== itemIndex);
      setCart(newCart);
      if (item) {
        toast.info(`${item.name} removed from cart`, {
          position: "top-right",
          autoClose: 2000,
        });
      }
    }
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.warning("Your cart is empty", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }
    toast.success("Proceeding to checkout...", {
      position: "top-right",
      autoClose: 2000,
    });
    setCart([]);
  };

  return (
    <>
      <ToastContainer />
      <Navbar cartCount={cart.length} />
      <Hero />
      <ProductsAndCart 
        cartItems={cart}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />
      <Steps />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
